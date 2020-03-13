 let budgetController = (function () {

 })();

let UIContriller = (function () {

})();

let controller = (function (budgetCtrl, UICtrl) {
    let ctrlAddItem = function() {

    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem});
    document.addEventListener('keypress', function (event) {
        //console.log(event);
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    } )

})(budgetController, UIContriller);
