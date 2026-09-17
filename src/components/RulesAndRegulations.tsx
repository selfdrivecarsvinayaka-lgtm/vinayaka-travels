import { useState } from "react";

const englishRules = [
  "The person taking the vehicle is fully responsible for any accident, scratches, damage or other incidents that occur while the vehicle is in their possession.",
  "Insurance claims below ₹2,00,000 are not applicable/processed as per the rental company's stated policy. Any violation may result in legal action.",
  "The vehicle can be used for a maximum of 400 km for 24 hours and 200 km for 12 hours. Additional kilometre charges will apply for extra usage.",
  "The person taking the vehicle must drive carefully and is responsible for any damage caused to the vehicle while driving.",
  "The customer must follow all vehicle-related instructions and rental conditions. Misuse of the vehicle is not permitted.",
  "The customer must follow all traffic rules. Fines resulting from wrong-route driving, signal jumping, wrong parking or other traffic violations are the customer's responsibility.",
  "Rental charges will apply for all days for which the vehicle remains with the customer.",
  "The original driving licence and required identification documents must be provided.",
  "Charges related to vehicle damage, traffic fines and other applicable costs will be collected from the customer according to the rental terms.",
  "Customers should read and understand all the above rules and regulations before booking the vehicle."
];

const teluguRules = [
  "మీరు తీసుకెళ్తున్న వెహికిల్ (కారు) కు ఎటువంటి ప్రమాదం జరిగినా, గీతలు పడినా మరియు యాక్సిడెంట్ జరిగినా వెహికిల్ తీసుకెళ్లిన వ్యక్తి పూర్తి బాధ్యత వహించాలి.",
  "₹2 లక్షల లోపు ఇన్సూరెన్స్ క్లెయిమ్ చేయడం జరుగదు. లేని యెడల చట్టరీత్యా వారిపై చర్య తీసుకోబడును.",
  "24 గంటల్లో 400 కిలోమీటర్లు మరియు 12 గంటల్లో 200 కిలోమీటర్లు మాత్రమే ప్రయాణించాలి. అదనపు కిలోమీటర్లకు Extra Per KM ఛార్జీలు వర్తిస్తాయి.",
  "కారు తీసుకెళ్లే వ్యక్తి డ్రైవింగ్ సమయంలో జాగ్రత్తగా వాహనం నడపాలి. వాహనానికి జరిగిన నష్టానికి సంబంధించి నిబంధనల ప్రకారం బాధ్యత వహించాలి.",
  "కారు తీసుకెళ్లే వ్యక్తి వాహనానికి సంబంధించిన నిబంధనలు మరియు సూచనలు తప్పనిసరిగా పాటించాలి. వాహనం దుర్వినియోగం చేయరాదు.",
  "కారు తీసుకెళ్లే వ్యక్తి ట్రాఫిక్ నిబంధనలు తప్పనిసరిగా పాటించాలి. రాంగ్ రూట్, సిగ్నల్ జంప్, రాంగ్ పార్కింగ్ మొదలైన వాటికి సంబంధించిన జరిమానాలు కస్టమర్ బాధ్యత.",
  "కారు ఎన్ని రోజులు తీసుకువెళ్లినా, అన్ని రోజులకు సంబంధించిన అద్దె/ఛార్జీలు వర్తిస్తాయి.",
  "ఒరిజినల్ డ్రైవింగ్ లైసెన్స్ మరియు అవసరమైన గుర్తింపు పత్రాలు తప్పనిసరిగా సమర్పించాలి.",
  "వాహనానికి సంబంధించిన డ్యామేజ్, ట్రాఫిక్ ఫైన్స్ మరియు ఇతర ఛార్జీలు నిబంధనల ప్రకారం కస్టమర్ నుండి వసూలు చేయబడతాయి.",
  "పై విషయములను పూర్తిగా చదివి అంగీకరించిన తర్వాత మాత్రమే వాహనం బుక్ చేసుకోవాలి."
];

export function RulesAndRegulations() {
  const [lang, setLang] = useState<"en" | "te">("en");
  
  const currentRules = lang === "en" ? englishRules : teluguRules;

  return (
    <section id="rules-regulations" className="py-16 md:py-24 bg-white relative">
      <div className="mx-auto max-w-4xl px-5 relative z-10">
        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-6 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              Rules & Regulations
            </h2>
            <div className="inline-flex bg-white rounded-full p-1 border border-gray-200 shadow-sm shrink-0">
              <button
                onClick={() => setLang("en")}
                className={`px-4 sm:px-5 py-2.5 sm:py-2 min-w-[80px] rounded-full text-sm font-bold transition-all ${
                  lang === "en" ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-ink"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("te")}
                className={`px-4 sm:px-5 py-2.5 sm:py-2 min-w-[80px] rounded-full text-sm font-bold transition-all ${
                  lang === "te" ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-ink"
                }`}
              >
                తెలుగు
              </button>
            </div>
          </div>
          
          <div className="space-y-5">
            {currentRules.map((rule, index) => (
              <div key={index} className="flex gap-4 group">
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {index + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed pt-1 flex-1 font-medium">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200/60">
            <p className="text-sm text-muted-foreground font-medium italic text-center sm:text-left">
              * These are the rental company's stated rules and conditions and are not government laws.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
