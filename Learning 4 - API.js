//The Last Chapter. Chapter 7. API
/*
How API works in JS?
APIs commonly send data in different formats, and the most widely used format is JSON (JavaScript Object Notation). AJAX is a technique used to fetch data from an API asynchronously, often using methods like fetch() or XMLHttpRequest. When using fetch(), the .json() method is used to parse the JSON response into a JavaScript object.
*/
let joke = document.getElementById("joke-api");
const URL = "https://official-joke-api.appspot.com/random_joke"; // API endpoint

const getFact = async () => {
  let response = await fetch(URL);
  let data = await response.json();
  joke.innerText = data.setup + " \n " + data.punchline;
};

getFact();

//Currency changing API
//countryList
const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@";
const dropdowns = document.querySelectorAll(".c-s-form-to");
const exchangeButton = document.querySelector("#get-exchange-rate");
const exchangeRateText = document.querySelector("#exchange-rate-text");

// Populate dropdowns with currency options
for (const select of dropdowns) {
  for (const currCode in countryList) {
    const option = document.createElement("option");
    option.innerText = currCode;
    option.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      option.selected = true;
    } else if (select.name === "to" && currCode === "BDT") {
      option.selected = true;
    }

    select.append(option);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Update country flag beside dropdown
const updateFlag = (element) => {
  const img = element.parentElement.querySelector("img");
  const currCode = element.value;
  const countryCode = countryList[currCode];
  const flagURL = `https://flagsapi.com/${countryCode}/flat/64.png`;
  img.src = flagURL;
};

// Handle exchange button click
exchangeButton.addEventListener("click", (evt) => {
  evt.preventDefault();

  const amountField = document.querySelector("#amount");
  const amountValue = amountField.value;

  if (amountValue === "" || amountValue < 1) {
    exchangeRateText.innerHTML = `<span style="color: red">Please enter a valid number</span>`;
    return;
  }

  exchangeRateText.innerHTML = `<span style="color: black">Getting exchange rate...</span>`;
  getDateAndFetch();
});

// Generate date and pass to URL builder
const getDateAndFetch = () => {
  const date = document.querySelector("#date").value.padStart(2, "0");
  const month = document.querySelector("#month").value.padStart(2, "0");
  const year = document.querySelector("#year").value;

  const formattedDate = `${year}-${month}-${date}`;
  fetchExchangeRate(formattedDate);
};

// Build API URL, fetch data, and show result
const fetchExchangeRate = async (urlDate) => {
  const fromCurrency = document
    .querySelector("#from-currency")
    .value.toLowerCase();
  const toCurrency = document.querySelector("#to-currency").value.toLowerCase();
  const apiURL = `${BASE_URL}${urlDate}/v1/currencies/${fromCurrency}.json`;

  console.log("Fetching from:", apiURL);

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    const rate = data[fromCurrency]?.[toCurrency];

    if (rate) {
      const amount = parseFloat(document.querySelector("#amount").value);
      const converted = (amount * rate).toFixed(2);

      exchangeRateText.innerHTML = `<span style="color: green">💱 ${amount} ${fromCurrency.toUpperCase()} = ${converted} ${toCurrency.toUpperCase()}</span>`;
    } else {
      exchangeRateText.innerHTML = `<span style="color: red">Conversion rate not found for ${toCurrency.toUpperCase()}</span>`;
    }
  } catch (err) {
    console.error("Error fetching exchange rate:", err);
    exchangeRateText.innerHTML = `<span style="color: red">Error fetching exchange rate. Please try again.</span>`;
  }
};
