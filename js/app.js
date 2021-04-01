
(function(){
    var img = document.getElementById('customer-img').src = 'img/customer-0.jpg';
    var name = document.getElementById("customer-name")
    name.innerHTML = "Martine";
    var text = document.getElementById("customer-text")
    text.innerHTML = "The best coder in the world";
})();



(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    const buttons = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    //Create a new customer using a customer constructor
    
    //Customer Constructor
    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    //Create new customer using the constructor function

    function createCustomer(img, name, text) {

        let fullImg = `./img/customer-${img}.jpg`
        // Initializing a new String object
        let customer = new Customer(fullImg, name, text)

        customers.push(customer)
    }

    
    createCustomer(0, 'Martine', 'Best coder in the world')
    createCustomer(1, 'Lauren', 'Best dog mama')
    createCustomer(2, 'Alexa', 'Adventure Queen')
    createCustomer(3, 'Liz', 'I love breakfast pizza')
    createCustomer(4, 'Stephanie', 'Desserts and Macrame')
    

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prevBtn')){
               if(index === 0){
                    index = customers.length
               }
               index--
               customerImage.src = customers[index].img
               customerName.textContent = customers[index].name
               customerText.textContent = customers[index].text
            };
            if (e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                     index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
             }
        })
    })
    
})()