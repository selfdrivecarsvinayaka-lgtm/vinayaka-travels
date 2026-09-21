import { useState, useEffect, useRef } from "react";
import { X, Calendar, Clock, MapPin, Users, Settings2, Fuel } from "lucide-react";
import { Vehicle } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";
import { ImageLightbox } from "./ImageLightbox";

interface BookingModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

export function BookingModal({ vehicle, onClose }: BookingModalProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>(vehicle.image);

  useEffect(() => {
    setSelectedImage(vehicle.image);
  }, [vehicle]);

  const imagesToShow = vehicle.gallery && vehicle.gallery.length > 0 
    ? vehicle.gallery 
    : [vehicle.image];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "",
    returnTime: "",
    duration: "12 Hours",
    pickupLocation: "",
    message: "",
  });

  const [error, setError] = useState("");
  const formStartedRef = useRef(false);

  const markFormStarted = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent("booking_form_start", { car_name: vehicle.name });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    markFormStarted();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // clear error on typing
  };

  const handleDurationChange = (duration: string) => {
    markFormStarted();
    setFormData((prev) => ({ ...prev, duration }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) return setError("Please enter your name.");
    if (!formData.phone.trim()) return setError("Please enter your phone number.");
    if (!formData.pickupDate) return setError("Please select a pickup date.");
    if (!formData.returnDate) return setError("Please select a return date.");
    if (!formData.pickupTime) return setError("Please select a pickup time.");
    if (!formData.returnTime) return setError("Please select a return time.");
    if (!formData.duration) return setError("Please select a rental duration.");

    // Determine selected price & limits
    const price = formData.duration === "12 Hours" ? vehicle.price12h : vehicle.price24h;
    const limit = formData.duration === "12 Hours" ? vehicle.limit12h : vehicle.limit24h;

    // Format Date from YYYY-MM-DD to DD-MM-YYYY
    const formatDate = (dateStr: string) => {
      if (!dateStr) return "";
      const [year, month, day] = dateStr.split("-");
      return `${day}-${month}-${year}`;
    };

    // Format Time from HH:MM to 12-hour AM/PM
    const formatTime = (timeStr: string) => {
      if (!timeStr) return "";
      const [hourStr, minStr] = timeStr.split(":");
      let hour = parseInt(hourStr, 10);
      const ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      if (hour === 0) hour = 12;
      const formattedHour = hour.toString().padStart(2, "0");
      return `${formattedHour}:${minStr} ${ampm}`;
    };

    // Replace ₹ with Rs.
    const formattedPrice = price.replace("₹", "Rs. ");

    // Generate WhatsApp Message
    let text = `Hello Vinayaka Self Drive Cars,\n\nI would like to book a car.\n\n`;
    text += `Vehicle: ${vehicle.name}\n\n`;
    text += `Customer Name: ${formData.name}\n`;
    text += `Phone: ${formData.phone}\n\n`;
    
    text += `Pickup Date: ${formatDate(formData.pickupDate)}\n`;
    text += `Pickup Time: ${formatTime(formData.pickupTime)}\n\n`;
    
    text += `Return Date: ${formatDate(formData.returnDate)}\n`;
    text += `Return Time: ${formatTime(formData.returnTime)}\n\n`;
    
    text += `Rental Duration: ${formData.duration}\n\n`;
    if (formData.pickupLocation) {
      text += `Pickup Location: ${formData.pickupLocation}\n\n`;
    }
    
    text += `Rental Price: ${formattedPrice}\n`;
    if (limit) {
      text += `KM Limit: ${limit}\n\n`;
    } else {
      text += `\n`;
    }

    if (formData.message) {
      text += `Message: ${formData.message}\n\n`;
    }

    text += `Please confirm the availability and booking.\n\nThank you.`;

    trackEvent("booking_form_submit", { car_name: vehicle.name, duration: formData.duration });
    trackEvent("whatsapp_click", { booking_type: "car_booking", car_name: vehicle.name });

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/916300943161?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-ink/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-gray-100/80 hover:bg-gray-200 rounded-full shadow-sm transition-colors text-ink"
        >
          <X className="size-5" />
        </button>

        {/* Left: Vehicle Summary */}
        <div className="hidden md:flex w-full md:w-2/5 bg-gray-50 p-8 flex-col justify-between border-r border-gray-100 overflow-y-auto">
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                {vehicle.category}
              </span>
              <h2 className="text-3xl font-bold font-display text-ink">{vehicle.name}</h2>
            </div>
            
            {vehicle.gallery && vehicle.gallery.length > 0 ? (
              <div className="flex flex-col gap-4 mb-6">
                <div 
                  className="cursor-zoom-in relative group rounded-2xl overflow-hidden border border-black/5 shadow-sm bg-white aspect-[16/9]"
                  onClick={() => setLightboxIndex(imagesToShow.indexOf(selectedImage) !== -1 ? imagesToShow.indexOf(selectedImage) : 0)}
                >
                  <img 
                    src={selectedImage} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {imagesToShow.map((img, idx) => (
                    <div 
                      key={idx}
                      className={`cursor-pointer relative group rounded-xl overflow-hidden border-2 transition-all bg-white aspect-[4/3] ${
                        selectedImage === img ? "border-primary shadow-sm" : "border-transparent border-black/5 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${vehicle.name} detail ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div 
                className="cursor-zoom-in relative group rounded-xl overflow-hidden mb-6"
                onClick={() => setLightboxIndex(0)}
              >
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <Users className="size-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-muted-foreground font-semibold">Seats</span>
                  <span className="text-sm font-bold">{vehicle.seats}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <Settings2 className="size-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-muted-foreground font-semibold">Transmission</span>
                  <span className="text-sm font-bold">{vehicle.transmission}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <Fuel className="size-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-muted-foreground font-semibold">Fuel</span>
                  <span className="text-sm font-bold">{vehicle.fuel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col overflow-y-auto">
          <h3 className="text-2xl font-bold font-display mb-2 text-ink">Book {vehicle.name}</h3>
          <p className="text-sm text-muted-foreground mb-6">Fill in your trip details to confirm availability via WhatsApp.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-ink ml-1">Customer Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-ink ml-1">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. 9876543210"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-ink ml-1">Pickup Date *</label>
                <div className="relative">
                  <input 
                    type="date" 
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-ink ml-1">Pickup Time *</label>
                <div className="relative">
                  <input 
                    type="time" 
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-ink ml-1">Return Date *</label>
                <div className="relative">
                  <input 
                    type="date" 
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-ink ml-1">Return Time *</label>
                <div className="relative">
                  <input 
                    type="time" 
                    name="returnTime"
                    value={formData.returnTime}
                    onChange={handleInputChange}
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Duration / Pricing */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-ink ml-1">Rental Duration *</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleDurationChange("12 Hours")}
                  className={`relative p-4 rounded-xl border-2 text-left transition-all flex flex-col items-center justify-center ${
                    formData.duration === "12 Hours" 
                      ? "border-primary bg-primary/5 shadow-[0_0_0_1px_rgba(var(--primary),0.1)]" 
                      : "border-gray-100 bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">12 Hours</span>
                  <span className={`text-xl font-bold font-display ${formData.duration === "12 Hours" ? "text-primary" : "text-ink"}`}>
                    {vehicle.price12h}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDurationChange("24 Hours")}
                  className={`relative p-4 rounded-xl border-2 text-left transition-all flex flex-col items-center justify-center ${
                    formData.duration === "24 Hours" 
                      ? "border-primary bg-primary/5 shadow-[0_0_0_1px_rgba(var(--primary),0.1)]" 
                      : "border-gray-100 bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">24 Hours</span>
                  <span className={`text-xl font-bold font-display ${formData.duration === "24 Hours" ? "text-primary" : "text-ink"}`}>
                    {vehicle.price24h}
                  </span>
                </button>
              </div>
            </div>

            {/* Location & Message */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-ink ml-1">Pickup Location (Optional)</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="e.g. Warangal Railway Station"
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-100">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full h-14 bg-[#25D366] hover:bg-[#20b958] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Continue to WhatsApp
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={imagesToShow}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
