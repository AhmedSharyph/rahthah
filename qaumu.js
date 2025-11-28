/* qaumu.js - Country Dropdown Library */
(function(global) {
  const countries = [
    "Maldives","Bangladesh","India","Sri Lanka","Egypt","Nepal","Afghanistan","Albania","Algeria",
    "American Samoa (US)","Andorra","Angola","Anguilla (GB)","Antigua and Barbuda","Argentina","Armenia",
    "Aruba (NL)","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Barbados","Belarus","Belgium",
    "Belize","Benin","Bermuda (GB)","Bhutan","Bolivia","Bonaire (NL)","Bosnia and Herzegovina","Botswana",
    "Bouvet Island (NO)","Brazil","British Indian Ocean Territory (GB)","British Virgin Islands (GB)","Brunei",
    "Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands (GB)",
    "Central African Republic","Chad","Chile","China","Christmas Island (AU)","Cocos Islands (AU)","Colombia",
    "Comoros","Congo DRC","Congo Republic","Cook Islands (NZ)","Coral Sea Islands Territory (AU)","Costa Rica",
    "Croatia","Cuba","Curaçao (NL)","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic",
    "East Timor","Ecuador","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
    "Falkland Islands (GB)","Faroe Islands (DK)","Fiji Islands","Finland","France","French Guiana (FR)",
    "French Polynesia (FR)","French Southern Lands (FR)","Gabon","Gambia","Georgia","Germany","Ghana",
    "Gibraltar (GB)","Greece","Greenland (DK)","Grenada","Guadeloupe (FR)","Guam (US)","Guatemala","Guernsey (GB)",
    "Guinea","Guinea-Bissau","Guyana","Haiti","Heard and McDonald Islands (AU)","Honduras","Hong Kong (CN)",
    "Hungary","Iceland","Indonesia","Iran","Iraq","Ireland","Isle of Man (GB)","Israel","Italy","Ivory Coast",
    "Jamaica","Jan Mayen (NO)","Japan","Jersey (GB)","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait",
    "Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
    "Macau (CN)","Madagascar","Malawi","Malaysia","Mali","Malta","Marshall Islands","Martinique (FR)","Mauritania",
    "Mauritius","Mayotte (FR)","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat (GB)",
    "Morocco","Mozambique","Myanmar","Namibia","Nauru","Navassa (US)","Netherlands","New Caledonia (FR)",
    "New Zealand","Nicaragua","Niger","Nigeria","Niue (NZ)","Norfolk Island (AU)","North Korea","North Macedonia",
    "Northern Marianas (US)","Norway","Oman","Pakistan","Palau","Palestinian Authority","Panama","Papua New Guinea",
    "Paraguay","Peru","Philippines","Pitcairn Island (GB)","Poland","Portugal","Puerto Rico (US)","Qatar","Reunion (FR)",
    "Romania","Russia","Rwanda","Saba (NL)","Saint Barthelemy (FR)","Saint Helena, Ascension, Tristan da Cunha (GB)",
    "Saint Kitts and Nevis","Saint Lucia","Saint Martin (FR)","Saint Pierre and Miquelon (FR)","Saint Vincent and the Grenadines",
    "Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore",
    "Sint Eustatius (NL)","Sint Maarten (NL)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia (GB)",
    "South Korea","South Sudan","Spain","Sudan","Suriname","Svalbard (NO)","Sweden","Switzerland","Syria","Taiwan","Tajikistan",
    "Tanzania","Thailand","Togo","Tokelau (NZ)","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan",
    "Turks and Caicos Islands (GB)","Tuvalu","U.S. Minor Pacific Islands (US)","U.S. Virgin Islands (US)","Uganda","Ukraine",
    "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela",
    "Vietnam","Wallis and Futuna (FR)","Yemen","Zambia","Zimbabwe"
  ];

  // Auto-populate all <select> with class "qaumu"
  function populate() {
    const selects = document.querySelectorAll('select.qaumu');
    selects.forEach(select => {
      select.innerHTML = '';
      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = 'Select Country';
      select.appendChild(placeholder);

      countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        select.appendChild(option);
      });
    });
  }

  // Auto-run on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', populate);

  // Expose to global namespace
  global.qaumu = {
    countries,
    populate
  };
})(window);
