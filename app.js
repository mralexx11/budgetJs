 let budgetController = (() => {

     let Expense = (id, description, value) => {
         this.id = id;
         this.description = description;
         this.value = value;
     };

     let Income = (id, description, value) => {
         this.id = id;
         this.description = description;
         this.value = value;
     };

     let data = {
         allItems: {
             exp: [],
             inc: []
         },
         totals: {
             exp: 0,
             inc: 0
         }
     }
 })();

let UIContriller = (() => {
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',

    };
    return {
        getInput: () => {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings:  () => DOMstrings
    }
})();

let controller = ((budgetCtrl, UICtrl) => {

    let setupEventListners = () => {
        let DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            //console.log(event);
            if (event.keyCode === 13 || event.which === 13) {
                //console.log('Enter pressed!', event);
                ctrlAddItem();
            }
        } );
    };


    let ctrlAddItem = () => {
        let input = UICtrl.getInput();
        console.log(input);
    };

    return {
        init: () => {
            console.log('App is started');
            setupEventListners();
        }
    }

})(budgetController, UIContriller);

controller.init();
