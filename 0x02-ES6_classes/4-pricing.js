/* eslint-disable */
import Currency from "./3-currency";

class Pricing {
    constructor(amount, currency) {
        this._validateAmount(amount);
        this._validateCurrency(currency);
        this._amount = amount;
        this._currency = currency;
    }

    // getters
    get amount() {
        return this._amount;
    }

    get currency() {
        return this._currency;
    }

    // Setters
    set amount(amount) {
        this._validateAmount(amount);
        this._amount = amount;
    }

    set currency(currency) {
        this._validateCurrency(currency)
        this._currency = currency;
    }
    
    // Others
    displayFullPrice() {
        const { amount, currency } = this;
        return `${amount} ${currency.name} (${currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }

    // Validators
    _validateCurrency(currency) {
        if (!(currency instanceof Currency)) {
            throw TypeError('Currency should be an instance of Currency class');
        }
    }

    _validateAmount(amount) {
        if (typeof amount !== 'number') {
            throw TypeError('Amount should be a number or float');
        }
    }
}
