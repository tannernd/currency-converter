export type currencyTypeObj = {
    currency: string,
    rate: number
}

export const currencyTypeRate:currencyTypeObj[] = [
    
    {
        currency: "GBP",
        rate: 0.772349
    },
    {
        currency: "JPY",
        rate: 153.495526
    },
    {
        currency: "AUD",
        rate: 1.521765
    },
    {
        currency: "CAD",
        rate: 1.391474
    },
    {
        currency: "CHF",
        rate: 0.866270
    },
    {
        currency: "CNY",
        rate: 7.123495
    },
    {
        currency: "INR",
        rate: 84.083598
    },
    {
        currency: "MXN",
        rate: 20.177567
    },
    {
        currency: "ZAR",
        rate: 17.673650
    },
    {
        currency: "EUR",
        rate: 0.921858
    },
];

export const defaultCurrency: string = 'EUR' ;
export const defaultValue: number = 1 ;