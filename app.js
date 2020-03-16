 let budgetController = (() => {

     let Expense = function (id, description, value) {
         this.id = id;
         this.description = description;
         this.value = value;
     };

     let Income = function (id, description, value) {
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
     };

     return {
         addItem: (type, des, val) => {
             let newItem, ID;

             data.allItems[type].length > 0 ? ID = data.allItems[type][data.allItems[type].length -1].id + 1 : ID = 0;

             type === 'exp' ? newItem = new Expense(ID, des, val) : newItem = new Income(ID, des, val);
             data.allItems[type].push(newItem);
             return newItem;
         },
         testing: () => console.log(data)
     };
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
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        } );
    };


    let ctrlAddItem = () => {
        let input = UICtrl.getInput(),
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    };

    return {
        init: () => {
            console.log('App is started');
            setupEventListners();
        }
    }

})(budgetController, UIContriller);

controller.init();
