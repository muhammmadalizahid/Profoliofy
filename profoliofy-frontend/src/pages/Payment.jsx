import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-50">Portfoliofy</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="#features" className="text-gray-50 hover:text-gray-200 transition-colors">Features</Link>
          <Link to="#examples" className="text-gray-50 hover:text-gray-200 transition-colors">Examples</Link>
          <Link to="#pricing" className="text-gray-50 hover:text-gray-200 transition-colors">Pricing</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            to="/auth" 
            className="px-4 py-2 text-gray-50 hover:bg-blue-800 rounded-lg transition-colors"
          >
            Sign In
          </Link>
          <Link 
            to="#generate" 
            className="px-4 py-2 bg-gray-50 text-blue-900 hover:bg-gray-100 rounded-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

const countries = [
  { code: "AF", name: "Afghanistan" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AS", name: "American Samoa" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AI", name: "Anguilla" },
  { code: "AQ", name: "Antarctica" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AW", name: "Aruba" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BM", name: "Bermuda" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BV", name: "Bouvet Island" },
  { code: "BR", name: "Brazil" },
  { code: "IO", name: "British Indian Ocean Territory" },
  { code: "BN", name: "Brunei Darussalam" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CA", name: "Canada" },
  { code: "CV", name: "Cape Verde" },
  { code: "KY", name: "Cayman Islands" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CX", name: "Christmas Island" },
  { code: "CC", name: "Cocos (Keeling) Islands" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "Congo, Democratic Republic" },
  { code: "CK", name: "Cook Islands" },
  { code: "CR", name: "Costa Rica" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CW", name: "Curaçao" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "ET", name: "Ethiopia" },
  { code: "FK", name: "Falkland Islands (Malvinas)" },
  { code: "FO", name: "Faroe Islands" },
  { code: "FJ", name: "Fiji" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GF", name: "French Guiana" },
  { code: "PF", name: "French Polynesia" },
  { code: "TF", name: "French Southern Territories" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Germany" },
  { code: "GH", name: "Ghana" },
  { code: "GI", name: "Gibraltar" },
  { code: "GR", name: "Greece" },
  { code: "GL", name: "Greenland" },
  { code: "GD", name: "Grenada" },
  { code: "GP", name: "Guadeloupe" },
  { code: "GU", name: "Guam" },
  { code: "GT", name: "Guatemala" },
  { code: "GG", name: "Guernsey" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HM", name: "Heard Island and McDonald Islands" },
  { code: "VA", name: "Holy See (Vatican City State)" },
  { code: "HN", name: "Honduras" },
  { code: "HK", name: "Hong Kong" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran, Islamic Republic of" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IM", name: "Isle of Man" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JP", name: "Japan" },
  { code: "JE", name: "Jersey" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "KP", name: "Korea, Democratic People's Republic" },
  { code: "KR", name: "Korea, Republic of" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Lao People's Democratic Republic" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MO", name: "Macao" },
  { code: "MK", name: "Macedonia, Republic of" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MQ", name: "Martinique" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "YT", name: "Mayotte" },
  { code: "MX", name: "Mexico" },
  { code: "FM", name: "Micronesia, Federated States of" },
  { code: "MD", name: "Moldova, Republic of" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "ME", name: "Montenegro" },
  { code: "MS", name: "Montserrat" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NC", name: "New Caledonia" },
  { code: "NZ", name: "New Zealand" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "NU", name: "Niue" },
  { code: "NF", name: "Norfolk Island" },
  { code: "MP", name: "Northern Mariana Islands" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palau" },
  { code: "PS", name: "Palestine, State of" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PN", name: "Pitcairn" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "PR", name: "Puerto Rico" },
  { code: "QA", name: "Qatar" },
  { code: "RE", name: "Réunion" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russian Federation" },
  { code: "RW", name: "Rwanda" },
  { code: "BL", name: "Saint Barthélemy" },
  { code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "LC", name: "Saint Lucia" },
  { code: "MF", name: "Saint Martin (French part)" },
  { code: "PM", name: "Saint Pierre and Miquelon" },
  { code: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapore" },
  { code: "SX", name: "Sint Maarten (Dutch part)" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "GS", name: "South Georgia and the South Sandwich Islands" },
  { code: "SS", name: "South Sudan" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SD", name: "Sudan" },
  { code: "SR", name: "Suriname" },
  { code: "SJ", name: "Svalbard and Jan Mayen" },
  { code: "SZ", name: "Swaziland" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syrian Arab Republic" },
  { code: "TW", name: "Taiwan, Province of China" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania, United Republic of" },
  { code: "TH", name: "Thailand" },
  { code: "TL", name: "Timor-Leste" },
  { code: "TG", name: "Togo" },
  { code: "TK", name: "Tokelau" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TC", name: "Turks and Caicos Islands" },
  { code: "TV", name: "Tuvalu" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "UM", name: "United States Minor Outlying Islands" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VU", name: "Vanuatu" },
  { code: "VE", name: "Venezuela, Bolivarian Republic of" },
  { code: "VN", name: "Viet Nam" },
  { code: "VG", name: "Virgin Islands, British" },
  { code: "VI", name: "Virgin Islands, U.S." },
  { code: "WF", name: "Wallis and Futuna" },
  { code: "EH", name: "Western Sahara" },
  { code: "YE", name: "Yemen" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" }
];

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
      {/* Blue Header with White Text */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 shadow-lg">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Payment Section */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-900"
            >
              Upgrade to Pro
            </motion.h2>
            <p className="text-lg text-gray-600 mb-8">
              Unlock premium templates and advanced features for your professional portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Payment Details</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-1">Card Information</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="card"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="1234 1234 1234 1234"
                      required
                    />
                    {/* <div className="absolute right-3 top-3 flex space-x-2">
                      <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
                      <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
                    </div> */}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      id="expiry"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                    <input
                      type="text"
                      id="cvc"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Smith"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <div className="relative">
                    <select
                      id="country"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                      required
                    >
                      <option value="">Select country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>{country.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="save-card"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="save-card" className="ml-2 block text-sm text-gray-700">
                    Save card for future payments
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md"
                >
                  Pay $9/month
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  By continuing, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
            
            {/* Order Summary */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 h-fit sticky top-4">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div>
                    <h4 className="font-semibold text-gray-800">Pro Plan</h4>
                    <p className="text-sm text-gray-600">Monthly subscription</p>
                  </div>
                  <span className="font-bold text-gray-800">$9.00</span>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">What's included:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>All premium templates</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom domain support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Priority customer support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Unlimited updates</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800">$9.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-800">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4">
                    <span className="text-gray-800">Total</span>
                    <span className="text-blue-900">$9.00/month</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-blue-700">
                      You'll be charged $9.00 today. The subscription will automatically renew each month until canceled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Security Assurance */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center space-x-4">
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-gray-600">
                Secure payment. All transactions are encrypted and processed securely.
              </p>
            </div>
            <div className="flex justify-center space-x-6 mt-6">
              <img src="data:image/png;base64,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" className="h-8" alt="Visa" />
              <img src="data:image/png;base64,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" className="h-8" alt="Mastercard" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nxFC07E4mdUegqUadCk-s9yAnZVaLO_rpw&s" className="h-8" alt="Apple Pay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" className="h-8" alt="PayPal" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" className="h-8" alt="Google Pay" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Blue with White Text */}
      <footer className="bg-blue-900 text-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold">Portfoliofy</span>
              </div>
              <p className="text-sm opacity-80">
                AI-powered portfolio creation for professionals.
              </p>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="text-md font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#features" className="hover:underline opacity-80 hover:opacity-100">Features</Link></li>
                <li><Link to="#examples" className="hover:underline opacity-80 hover:opacity-100">Examples</Link></li>
                <li><Link to="#pricing" className="hover:underline opacity-80 hover:opacity-100">Pricing</Link></li>
                <li><Link to="#faq" className="hover:underline opacity-80 hover:opacity-100">FAQ</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-md font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">About Us</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Blog</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Careers</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Contact</Link></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-md font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Terms of Service</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div>
              <h4 className="text-md font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Facebook Icon */}
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                
                {/* Twitter Icon */}
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                
                {/* Instagram Icon */}
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                
                {/* LinkedIn Icon */}
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V19h-3v-9h3v1.3c.6-1 1.8-1.7 3.1-1.7 2.4 0 4.4 2 4.4 4.4V19z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-800 mt-12 pt-8 text-sm text-center opacity-80">
            © {new Date().getFullYear()} Portfoliofy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}