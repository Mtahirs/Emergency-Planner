
import React from 'react';
import type { StepData, QuestionOption } from './types.ts';
import { DollarSignIcon, AlertTriangleIcon, TargetIcon, TrendingUpIcon } from './components/Icons.tsx';

export const ALL_CURRENCIES: (QuestionOption & { symbol: string })[] = [
  { value: 'AFN', label: 'Afghan Afghani', symbol: '؋' },
  { value: 'ALL', label: 'Albanian Lek', symbol: 'L' },
  { value: 'DZD', label: 'Algerian Dinar', symbol: 'د.ج' },
  { value: 'AOA', label: 'Angolan Kwanza', symbol: 'Kz' },
  { value: 'ARS', label: 'Argentine Peso', symbol: '$' },
  { value: 'AMD', label: 'Armenian Dram', symbol: '֏' },
  { value: 'AWG', label: 'Aruban Florin', symbol: 'ƒ' },
  { value: 'AUD', label: 'Australian Dollar', symbol: '$' },
  { value: 'AZN', label: 'Azerbaijani Manat', symbol: '₼' },
  { value: 'BSD', label: 'Bahamian Dollar', symbol: '$' },
  { value: 'BHD', label: 'Bahraini Dinar', symbol: '.د.ب' },
  { value: 'BDT', label: 'Bangladeshi Taka', symbol: '৳' },
  { value: 'BBD', label: 'Barbadian Dollar', symbol: '$' },
  { value: 'BYN', label: 'Belarusian Ruble', symbol: 'Br' },
  { value: 'BZD', label: 'Belize Dollar', symbol: 'BZ$' },
  { value: 'BMD', label: 'Bermudian Dollar', symbol: '$' },
  { value: 'BTN', label: 'Bhutanese Ngultrum', symbol: 'Nu.' },
  { value: 'BOB', label: 'Bolivian Boliviano', symbol: 'Bs.' },
  { value: 'BAM', label: 'Bosnia-Herzegovina Convertible Mark', symbol: 'KM' },
  { value: 'BWP', label: 'Botswanan Pula', symbol: 'P' },
  { value: 'BRL', label: 'Brazilian Real', symbol: 'R$' },
  { value: 'GBP', label: 'British Pound Sterling', symbol: '£' },
  { value: 'BND', label: 'Brunei Dollar', symbol: '$' },
  { value: 'BGN', label: 'Bulgarian Lev', symbol: 'лв' },
  { value: 'BIF', label: 'Burundian Franc', symbol: 'FBu' },
  { value: 'KHR', label: 'Cambodian Riel', symbol: '៛' },
  { value: 'CAD', label: 'Canadian Dollar', symbol: '$' },
  { value: 'CVE', label: 'Cape Verdean Escudo', symbol: '$' },
  { value: 'KYD', label: 'Cayman Islands Dollar', symbol: '$' },
  { value: 'XAF', label: 'Central African CFA Franc', symbol: 'FCFA' },
  { value: 'XPF', label: 'CFP Franc', symbol: '₣' },
  { value: 'CLP', label: 'Chilean Peso', symbol: '$' },
  { value: 'CNY', label: 'Chinese Yuan', symbol: '¥' },
  { value: 'COP', label: 'Colombian Peso', symbol: '$' },
  { value: 'KMF', label: 'Comorian Franc', symbol: 'CF' },
  { value: 'CDF', label: 'Congolese Franc', symbol: 'FC' },
  { value: 'CRC', label: 'Costa Rican Colón', symbol: '₡' },
  { value: 'HRK', label: 'Croatian Kuna', symbol: 'kn' },
  { value: 'CUP', label: 'Cuban Peso', symbol: '$' },
  { value: 'CZK', label: 'Czech Koruna', symbol: 'Kč' },
  { value: 'DKK', label: 'Danish Krone', symbol: 'kr' },
  { value: 'DJF', label: 'Djiboutian Franc', symbol: 'Fdj' },
  { value: 'DOP', label: 'Dominican Peso', symbol: 'RD$' },
  { value: 'XCD', label: 'East Caribbean Dollar', symbol: '$' },
  { value: 'EGP', label: 'Egyptian Pound', symbol: '£' },
  { value: 'ERN', label: 'Eritrean Nakfa', symbol: 'Nfk' },
  { value: 'ETB', label: 'Ethiopian Birr', symbol: 'Br' },
  { value: 'EUR', label: 'Euro', symbol: '€' },
  { value: 'FKP', label: 'Falkland Islands Pound', symbol: '£' },
  { value: 'FJD', label: 'Fijian Dollar', symbol: '$' },
  { value: 'GMD', label: 'Gambian Dalasi', symbol: 'D' },
  { value: 'GEL', label: 'Georgian Lari', symbol: '₾' },
  { value: 'GHS', label: 'Ghanaian Cedi', symbol: 'GH₵' },
  { value: 'GIP', label: 'Gibraltar Pound', symbol: '£' },
  { value: 'GTQ', label: 'Guatemalan Quetzal', symbol: 'Q' },
  { value: 'GNF', label: 'Guinean Franc', symbol: 'FG' },
  { value: 'GYD', label: 'Guyanaese Dollar', symbol: '$' },
  { value: 'HTG', label: 'Haitian Gourde', symbol: 'G' },
  { value: 'HNL', label: 'Honduran Lempira', symbol: 'L' },
  { value: 'HKD', label: 'Hong Kong Dollar', symbol: '$' },
  { value: 'HUF', label: 'Hungarian Forint', symbol: 'Ft' },
  { value: 'ISK', label: 'Icelandic Króna', symbol: 'kr' },
  { value: 'INR', label: 'Indian Rupee', symbol: '₹' },
  { value: 'IDR', label: 'Indonesian Rupiah', symbol: 'Rp' },
  { value: 'IRR', label: 'Iranian Rial', symbol: '﷼' },
  { value: 'IQD', label: 'Iraqi Dinar', symbol: 'ع.د' },
  { value: 'ILS', label: 'Israeli New Shekel', symbol: '₪' },
  { value: 'JMD', label: 'Jamaican Dollar', symbol: 'J$' },
  { value: 'JPY', label: 'Japanese Yen', symbol: '¥' },
  { value: 'JOD', label: 'Jordanian Dinar', symbol: 'JD' },
  { value: 'KZT', label: 'Kazakhstani Tenge', symbol: '₸' },
  { value: 'KES', label: 'Kenyan Shilling', symbol: 'KSh' },
  { value: 'KWD', label: 'Kuwaiti Dinar', symbol: 'د.ك' },
  { value: 'KGS', label: 'Kyrgystani Som', symbol: 'с' },
  { value: 'LAK', label: 'Laotian Kip', symbol: '₭' },
  { value: 'LBP', label: 'Lebanese Pound', symbol: '£' },
  { value: 'LSL', label: 'Lesotho Loti', symbol: 'L' },
  { value: 'LRD', label: 'Liberian Dollar', symbol: '$' },
  { value: 'LYD', label: 'Libyan Dinar', symbol: 'ل.د' },
  { value: 'MOP', label: 'Macanese Pataca', symbol: 'MOP$' },
  { value: 'MKD', label: 'Macedonian Denar', symbol: 'ден' },
  { value: 'MGA', label: 'Malagasy Ariary', symbol: 'Ar' },
  { value: 'MWK', label: 'Malawian Kwacha', symbol: 'MK' },
  { value: 'MYR', label: 'Malaysian Ringgit', symbol: 'RM' },
  { value: 'MVR', label: 'Maldivian Rufiyaa', symbol: 'Rf' },
  { value: 'MRU', label: 'Mauritanian Ouguiya', symbol: 'UM' },
  { value: 'MUR', label: 'Mauritian Rupee', symbol: '₨' },
  { value: 'MXN', label: 'Mexican Peso', symbol: '$' },
  { value: 'MDL', label: 'Moldovan Leu', symbol: 'L' },
  { value: 'MNT', label: 'Mongolian Tugrik', symbol: '₮' },
  { value: 'MAD', label: 'Moroccan Dirham', symbol: 'د.م.' },
  { value: 'MZN', label: 'Mozambican Metical', symbol: 'MT' },
  { value: 'MMK', label: 'Myanmar Kyat', symbol: 'K' },
  { value: 'NAD', label: 'Namibian Dollar', symbol: '$' },
  { value: 'NPR', label: 'Nepalese Rupee', symbol: '₨' },
  { value: 'ANG', label: 'Netherlands Antillean Guilder', symbol: 'ƒ' },
  { value: 'TWD', label: 'New Taiwan Dollar', symbol: 'NT$' },
  { value: 'NZD', label: 'New Zealand Dollar', symbol: '$' },
  { value: 'NIO', label: 'Nicaraguan Córdoba', symbol: 'C$' },
  { value: 'NGN', label: 'Nigerian Naira', symbol: '₦' },
  { value: 'KPW', label: 'North Korean Won', symbol: '₩' },
  { value: 'NOK', label: 'Norwegian Krone', symbol: 'kr' },
  { value: 'OMR', label: 'Omani Rial', symbol: 'ر.ع.' },
  { value: 'PKR', label: 'Pakistani Rupee', symbol: '₨' },
  { value: 'PAB', label: 'Panamanian Balboa', symbol: 'B/.' },
  { value: 'PGK', label: 'Papua New Guinean Kina', symbol: 'K' },
  { value: 'PYG', label: 'Paraguayan Guarani', symbol: '₲' },
  { value: 'PEN', label: 'Peruvian Sol', symbol: 'S/.' },
  { value: 'PHP', label: 'Philippine Peso', symbol: '₱' },
  { value: 'PLN', label: 'Polish Zloty', symbol: 'zł' },
  { value: 'QAR', label: 'Qatari Rial', symbol: 'ر.ق' },
  { value: 'RON', label: 'Romanian Leu', symbol: 'lei' },
  { value: 'RUB', label: 'Russian Ruble', symbol: '₽' },
  { value: 'RWF', label: 'Rwandan Franc', symbol: 'R₣' },
  { value: 'SHP', label: 'Saint Helena Pound', symbol: '£' },
  { value: 'SVC', label: 'Salvadoran Colón', symbol: '$' },
  { value: 'SAR', label: 'Saudi Riyal', symbol: 'ر.س' },
  { value: 'RSD', label: 'Serbian Dinar', symbol: 'Дин.' },
  { value: 'SCR', label: 'Seychellois Rupee', symbol: '₨' },
  { value: 'SLL', label: 'Sierra Leonean Leone', symbol: 'Le' },
  { value: 'SGD', label: 'Singapore Dollar', symbol: '$' },
  { value: 'SBD', label: 'Solomon Islands Dollar', symbol: '$' },
  { value: 'SOS', label: 'Somali Shilling', symbol: 'S' },
  { value: 'ZAR', label: 'South African Rand', symbol: 'R' },
  { value: 'KRW', label: 'South Korean Won', symbol: '₩' },
  { value: 'SSP', label: 'South Sudanese Pound', symbol: '£' },
  { value: 'LKR', label: 'Sri Lankan Rupee', symbol: 'Rs' },
  { value: 'SDG', label: 'Sudanese Pound', symbol: 'ج.س.' },
  { value: 'SRD', label: 'Surinamese Dollar', symbol: '$' },
  { value: 'SZL', label: 'Swazi Lilangeni', symbol: 'L' },
  { value: 'SEK', label: 'Swedish Krona', symbol: 'kr' },
  { value: 'CHF', label: 'Swiss Franc', symbol: 'CHF' },
  { value: 'SYP', label: 'Syrian Pound', symbol: '£' },
  { value: 'TJS', label: 'Tajikistani Somoni', symbol: 'SM' },
  { value: 'TZS', label: 'Tanzanian Shilling', symbol: 'TSh' },
  { value: 'THB', label: 'Thai Baht', symbol: '฿' },
  { value: 'TOP', label: "Tongan Pa'anga", symbol: 'T$' },
  { value: 'TTD', label: 'Trinidad and Tobago Dollar', symbol: 'TT$' },
  { value: 'TND', label: 'Tunisian Dinar', symbol: 'د.ت' },
  { value: 'TRY', label: 'Turkish Lira', symbol: '₺' },
  { value: 'TMT', label: 'Turkmenistani Manat', symbol: 'T' },
  { value: 'UGX', label: 'Ugandan Shilling', symbol: 'USh' },
  { value: 'UAH', label: 'Ukrainian Hryvnia', symbol: '₴' },
  { value: 'AED', label: 'United Arab Emirates Dirham', symbol: 'د.إ' },
  { value: 'USD', label: 'United States Dollar', symbol: '$' },
  { value: 'UYU', label: 'Uruguayan Peso', symbol: '$U' },
  { value: 'UZS', label: 'Uzbekistan Som', symbol: 'soʻm' },
  { value: 'VUV', label: 'Vanuatu Vatu', symbol: 'VT' },
  { value: 'VEF', label: 'Venezuelan Bolívar', symbol: 'Bs F' },
  { value: 'VND', label: 'Vietnamese Dong', symbol: '₫' },
  { value: 'XOF', label: 'West African CFA Franc', symbol: 'CFA' },
  { value: 'YER', label: 'Yemeni Rial', symbol: '﷼' },
  { value: 'ZMW', label: 'Zambian Kwacha', symbol: 'ZK' },
].sort((a, b) => a.label.localeCompare(b.label));


export const INITIAL_FORM_DATA = {
  currency: 'USD',
  monthlyEssentials: '',
  monthlyIncome: '',
  currentSavings: '',
  monthlyDiscretionary: '',
  jobStability: '',
  incomeStreams: '',
  healthInsurance: '',
  housingStatus: '',
  dependents: '',
  mainConcerns: [],
  jobSearchTime: '',
  familySupport: '',
  assetCondition: '',
  monthlySavingsCapacity: '',
  storagePreference: '',
  savingsApproach: ''
};

export const STEPS: StepData[] = [
  {
    title: "Basic Financial Picture",
    icon: <DollarSignIcon className="w-6 h-6 text-indigo-600" />,
    questions: [
      {
        key: 'currency',
        label: 'Select Your Currency',
        type: 'select',
        options: ALL_CURRENCIES.map(({ value, label }) => ({ value, label })),
      },
      {
        key: 'monthlyEssentials',
        label: 'Monthly Essential Expenses',
        type: 'number',
        placeholder: '2500',
        help: 'Housing, utilities, food, transportation, minimum debt payments'
      },
      {
        key: 'monthlyIncome',
        label: 'Monthly Household Income (after taxes)',
        type: 'number',
        placeholder: '4000'
      },
      {
        key: 'currentSavings',
        label: 'Current Emergency Savings',
        type: 'number',
        placeholder: '500'
      },
      {
        key: 'monthlyDiscretionary',
        label: 'Monthly Discretionary Spending',
        type: 'number',
        placeholder: '800',
        help: 'Dining out, entertainment, hobbies, non-essential shopping'
      }
    ]
  },
  {
    title: "Risk Assessment",
    icon: <AlertTriangleIcon className="w-6 h-6 text-indigo-600" />,
    questions: [
      {
        key: 'jobStability',
        label: 'How stable is your employment?',
        type: 'select',
        options: [
          { value: 'very-stable', label: 'Very stable (tenured, government, essential services)' },
          { value: 'somewhat-stable', label: 'Somewhat stable (permanent position, established company)' },
          { value: 'unstable', label: 'Unstable (contract, gig work, volatile industry)' }
        ]
      },
      {
        key: 'incomeStreams',
        label: 'Income sources',
        type: 'select',
        options: [
          { value: 'single', label: 'Single income source' },
          { value: 'dual', label: 'Dual income household' },
          { value: 'multiple', label: 'Multiple income streams' }
        ]
      },
      {
        key: 'healthInsurance',
        label: 'Health insurance situation',
        type: 'select',
        options: [
          { value: 'excellent', label: 'Excellent coverage, low deductibles' },
          { value: 'good', label: 'Good coverage, moderate deductibles' },
          { value: 'basic', label: 'Basic coverage, high deductibles' },
          { value: 'none', label: 'No health insurance' }
        ]
      },
      {
        key: 'housingStatus',
        label: 'Housing situation',
        type: 'select',
        options: [
          { value: 'own', label: 'Own home (responsible for repairs)' },
          { value: 'rent', label: 'Rent (landlord handles major repairs)' }
        ]
      },
      {
        key: 'dependents',
        label: 'Number of dependents',
        type: 'select',
        options: [
          { value: '0', label: 'No dependents' },
          { value: '1', label: '1 dependent' },
          { value: '2', label: '2 dependents' },
          { value: '3+', label: '3 or more dependents' }
        ]
      }
    ]
  },
  {
    title: "Scenario Planning",
    icon: <TargetIcon className="w-6 h-6 text-indigo-600" />,
    questions: [
      {
        key: 'mainConcerns',
        label: 'What emergencies worry you most? (Select all that apply)',
        type: 'checkbox',
        options: [
          { value: 'job-loss', label: 'Job loss or income reduction' },
          { value: 'medical', label: 'Medical emergencies or health issues' },
          { value: 'home-repair', label: 'Major home repairs' },
          { value: 'car-repair', label: 'Vehicle repairs or replacement' },
          { value: 'family', label: 'Family emergencies requiring travel/support' }
        ]
      },
      {
        key: 'jobSearchTime',
        label: 'If you lost your job, how long to find comparable work?',
        type: 'select',
        options: [
          { value: '1-2', label: '1-2 months' },
          { value: '3-4', label: '3-4 months' },
          { value: '5-6', label: '5-6 months' },
          { value: '6+', label: 'More than 6 months' }
        ]
      },
      {
        key: 'familySupport',
        label: 'Family financial support availability',
        type: 'select',
        options: [
          { value: 'strong', label: 'Strong (could help with major expenses)' },
          { value: 'limited', label: 'Limited (could help with small amounts)' },
          { value: 'none', label: 'None available' }
        ]
      },
      {
        key: 'assetCondition',
        label: 'Condition of major assets (car, home, appliances)',
        type: 'select',
        options: [
          { value: 'excellent', label: 'Excellent (new/recently replaced)' },
          { value: 'good', label: 'Good condition' },
          { value: 'fair', label: 'Fair (some items aging)' },
          { value: 'poor', label: 'Poor (multiple items need replacement soon)' }
        ]
      }
    ]
  },
  {
    title: "Implementation Strategy",
    icon: <TrendingUpIcon className="w-6 h-6 text-indigo-600" />,
    questions: [
      {
        key: 'monthlySavingsCapacity',
        label: 'How much can you realistically save per month?',
        type: 'number',
        placeholder: '300',
        help: 'Be honest - what amount won\'t make you miserable?'
      },
      {
        key: 'storagePreference',
        label: 'Where would you prefer to keep emergency funds?',
        type: 'select',
        options: [
          { value: 'checking', label: 'Checking account (immediate access)' },
          { value: 'savings', label: 'High-yield savings account (best balance)' },
          { value: 'money-market', label: 'Money market account (higher yield, some restrictions)' }
        ]
      },
      {
        key: 'savingsApproach',
        label: 'Preferred savings approach',
        type: 'select',
        options: [
          { value: 'gradual', label: 'Steady monthly contributions' },
          { value: 'aggressive', label: 'Aggressive savings, then maintain' },
          { value: 'windfall', label: 'Rely mainly on bonuses/tax refunds' }
        ]
      }
    ]
  }
];