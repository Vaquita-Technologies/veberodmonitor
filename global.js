const nameMapping = {
    "temperature": "Temperature",
    "ph": "pH",
    "oxygendissolved": "Oxygen Dissolved",
    "electricalconductivity": "Elec. Cond",
    "bga": "Blue Green Algae",
    "turbidity": "Turbidity",
    "current": "Current",
    "batterylevel": "Battery Level"
}
const telemetryMapping = {
    "temperature": "Temperature",
    "ph": "pH",
    "oxygendissolved": "OxygenDissolved",
    "electricalconductivity": "ElectricalConductivity",
    "bga": "DissolvedSolidsTotal",
    "turbidity": "Turbidity",
    "current": "DissolvedSolidsTotal",
    "batterylevel": "BatteryLevel"
}
// const telemetryColorMapping = {
//     "temperature": '#66a3ff',
//     "ph": "orange",
//     "oxygendissolved": "green",
//     "electricalconductivity": "red",
//     "bga": "white",
//     "turbidity": "teal",
//     "current": "white",
//     "batterylevel": "yellow"
// }

const telemetryColorMapping = {
    "temperature": '#F5AD45',
    "ph": "#F5AD45",
    "oxygendissolved": "#F5AD45",
    "electricalconductivity": "#F5AD45",
    "bga": "#F5AD45",
    "turbidity": "#F5AD45",
    "current": "#F5AD45",
    "batterylevel": "#F5AD45"
}

const unitMapping = {
    "temperature": "°C",
    "ph": "pH",
    "oxygendissolved": "mg/L",
    "electricalconductivity": "mS/cm",
    "bga": "",
    "turbidity": "NTU",
    "current": "",
    "batterylevel": "%"
}


function GetTelemetryValue(res, param) {
    switch (param) {
        case "temperature":
            return res.Temperature.toFixed(2);
            break;
        case "ph":
            return res.pH.toFixed(2);
            break;
        case "oxygendissolved":
            return res.OxygenDissolved.toFixed(2);
            break;
        case "electricalconductivity":
            return res.ElectricalConductivity.toFixed(2);
            break;
        case "bga":
            return res.DissolvedSolidsTotal.toFixed(2);
            break;
        case "turbidity":
            return res.Turbidity.toFixed(2);
            break;
        case "current":
            return res.DissolvedSolidsTotal.toFixed(2);
            break;
        case "batterylevel":
            return res.BatteryLevel.toFixed(2);
            break;
    }

}



const descriptonMapping = {
    "temperature": "The most common physical assessment of water quality is the measurement of temperature. We measure Temperature directly using a continuous Temperature sensor. Water temperature changes according to the season and day/night cycles. <br><br>Temperature impacts both the chemical and biological characteristics of surface water. It affects the dissolved oxygen level in the water&#44; photosynthesis of aquatic plants&#44; metabolic rates of aquatic organisms&#44; and the sensitivity of these organisms to pollution&#44; parasites and disease. <br><br>Temperature affects the solubility and reaction rates of chemicals. In general&#44; the rate of chemical reactions increases with increasing water temperature. Many aquatic species can survive only within a limited temperature range and changes in water temperature may act as a signal for aquatic insects to emerge or for fish to spawn.<br>",
    "ph": "pH is a measure of how acidic/basic water is, the range goes from 0 to 14, with 7 being neutral. We measure pH directly using a continuous pH sensor. Water has good pH level within range of 6.5 to 8.5.<br><br>Urban areas tend to have large amounts of impervious surfaces, resulting in large volumes of runoff. As stormwater flows over these impervious surfaces, chemicals, pollutants, debris, and sediment are gathered. This is particularly important in construction areas as concrete is strongly alkaline can strongly influence stormwater pH. <br><br>pH should be neutralized in stormwater runoff because stormwater runoff ends up in waterways used by fish and for drinking water, bringing its pH level with it. Extremely high or low pH substances can damage human skin on contact. Metals also tend to be more toxic at lower pH.<br><br>Negative effects of pH imbalance on the environment include:<br>1. Aquatic invertebrates with exoskeletons or shells having sensitivity to pH lower than 7 which can impede shell formation<br>2. Fish eggs and larvae only tolerating a narrower pH range around neutral, adult fish having non-lethal adverse effects at the high and low ends of this range<br>3. low pH within this range possibly killing fish if metals are also present in the water, because low pH can bring metals to a more dangerous dissolved state",
    "oxygendissolved": "Description will be added soon..",
    "electricalconductivity": "Conductivity is a measure of the ability of water to pass an electrical current. We measure Electrical Conductivity directly using a continuous EC sensor. Each water body tends to have a relatively constant range of conductivity that, once established, can be used as a baseline for comparison.<br><br>Significant changes in conductivity could then be an indicator that a discharge or some other source of pollution has entered the aquatic resource. Water conducts electricity, but the dissolved minerals (ions) in water are what actually conduct the electricity. Pure (distilled) water is a very poor conductor of electricity, so the more dissolved minerals in the water, the more conductive the water becomes.<br><br>A sudden change of conductivity increasing its value may indicate a large amount of nutrients have entered in the water, which may lead to algae blooms. From the other side, a sudden change decreasing the conductivity may indicate an oil leak, as organic compounds like oil do not conduct electrical current very well and therefore have a low conductivity when in water. <br><br>Notice however that conductivity is also affected by temperature: the warmer the water, the higher the conductivity, so the changes need to be correlated with changes in the temperature.",
    "bga": "Description will be added soon..",
    "turbidity": "Turbidity is a measure of water clarity. We measure Turbidity directly using a continuous Turbidity sensor. Is clearer the closer to 0 NTU, and more turbid the closer to 1000 NTU, while it is normally in the order of hundreds NTU during raining periods.<br><br>How many materials suspended in water decreases the passage of light through the water, being an indicator for soil particles (clay, silt, and sand), algae, plankton, microbes, and other substances. These materials are typically in the size range of 0.004 mm (clay) to 1.0 mm (sand). The color of the water can change depending of the type of these materials.<br><br>Higher turbidity also increases water temperatures because suspended particles absorb more heat. This, in turn, reduces the concentration of dissolved oxygen (DO) because warm water holds less DO than cold. Higher turbidity also reduces the amount of light penetrating the water, which reduces photosynthesis and the production of DO. Suspended materials can clog fish gills, reducing resistance to disease in fish, lowering growth rates, and affecting egg and larval development. As the particles settle, they can blanket the stream bottom, especially in slower waters, and smother fish eggs and benthic macroinvertebrates. Sources of turbidity include:<br><br>1. Soil erosion<br>2. Waste discharge<br>3. Urban runoff<br>4. Eroding stream banks<br>5. Large numbers of bottom feeders (such as carp), which stir up bottom sediments<br>6. Excessive algae growth<br><br>Turbidity can be useful as an indicator of the effects of runoff from construction, agricultural practices, logging activity, discharges, and other sources. Turbidity often increases sharply during a rainfall, especially in developed watersheds, which typically have relatively high proportions of impervious surfaces. The flow of stormwater runoff from impervious surfaces rapidly increases stream velocity, which increases the erosion rates of streambanks and channels. Turbidity can also rise sharply during dry weather if earth-disturbing activities are occurring in or near a stream without erosion control practices in place.",
    "current": "Description will be added soon..",
    "batterylevel": "The approximate battery level (state of charge in percentage) is calculated using a calibrated approximate method which depends on the measured voltage, type of battery and environment conditions."
}
