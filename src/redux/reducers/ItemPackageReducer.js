import {ITEM_PACKAGE,
    LESSON_MONTH,
    CALCULATE_PRICES_ITEMS,GROUP_CLASS_CANT_PERSONS,
    GROUP_TOW_CLASS_CANT_PERSONS,
    GROUP_MORE_OF_TWO_PERSONS,
    RESET_PRICES,
    CHANGE_LESSON,
    CHANGE_TIME,
    LESSON_MONTHS} from '../actions/types'

const initialState  = {
    timeLesson: {},
    lessonMonth:{},
    calculatePrices: 0,
    calculatePricesIndividual: 0,
    calculatePricesGroup: 1,
    cantPersons: 1,
    modificacionSelect:false,
    numberMonts: 0,
    addCart: false,
    optionClass:1,// optioncClass --->  1.- Individual  ##  2.- Group 
    pricesGroup: 0
}

export default function CreateOnePackage  (state = initialState , action ){
    switch (action.type) {
        case ITEM_PACKAGE:
            return {
                ...state,
                timeLesson: action.payload,
                modificacionSelect: true,
            }
        case LESSON_MONTH:
            return {
                ...state,
                lessonMonth: action.payload,
                modificacionSelect: true
            }
        case CALCULATE_PRICES_ITEMS:
            let prices = 0;
            switch (state.timeLesson.value) {
                case '30':
                    prices = 16.80
                    break;
                case '45':
                    prices = 25.2
                    break;
                case '60':
                    prices = 33.6
                    break;
                default:
                    prices = 0
                    break;
            }
            return {
                ...state,
                calculatePricesIndividual: prices * state.lessonMonth.value,
                calculatePrices: prices * state.lessonMonth.value,
                modificacionSelect: true
            }
        case GROUP_CLASS_CANT_PERSONS:
            return {
                ...state,
                valuePersons: action.payload.valor,
                // calculatePrices :  state.calculatePrices * 0.75  + state.calculatePrices
            }
        case GROUP_TOW_CLASS_CANT_PERSONS:
            const res = state.calculatePricesIndividual * 0.75 
            
            return {
                ...state,
                calculatePrices: state.calculatePricesIndividual + res,
                cantPersons: 2,
                modificacionSelect:false,
                calculatePricesGroup: state.calculatePricesIndividual + res,
            }

        case GROUP_MORE_OF_TWO_PERSONS :
            const resultado  = state.calculatePricesIndividual * 0.50 ;
            const  calculos = action.payload.valor - 1;
            const total = resultado * calculos;

            return {
                ...state,
                cantPersons: action.payload.valor,
                calculatePrices: state.calculatePricesIndividual  +  total,
                calculatePricesGroup:state.calculatePricesIndividual  +  total,
                modificacionSelect:false
            }
        case 'PRICES_GROUP':
            return {
                ...state,
                pricesGroup: state.calculatePrices
            }

        case RESET_PRICES:
            return {
                ...state,
                calculatePricesIndividual: 0,
                calculatePrices:0,
                numberMonts:0,
                calculatePricesGroup:0
            }
        case CHANGE_TIME: 
            return {
                ...state,
                calculatePrices:0
            }   
        case CHANGE_LESSON:
            return{
                ...state,
                calculatePrices:0
            }
        case 'ADD_CART':
            return {
                ...state,
                addCart: true
            }
        case 'REMOVE_ADD_CART':
            return{
                ...state,
                addCart: false
            }
        case LESSON_MONTHS:
            return {
                ...state,
                calculatePrices: state.pricesGroup * state.numberMonts
            }
        case 'NUMBER_MONTHS':
            return{
                ...state,
                numberMonts:  action.payload,
                calculatePrices: state.calculatePricesGroup * action.payload
            }
        case 'NUMBER_MONTHS_INDIVIDUAL':
            return {
                ...state,
                numberMonts: action.payload,
                calculatePrices: state.calculatePricesIndividual * action.payload
            }
        case 'GROUP_CLASS':
            return {
                ...state,
                optionClass: action.payload
            }
        default:
            return  state;
    }
}