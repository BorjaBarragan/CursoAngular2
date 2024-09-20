export const invoiceData : any = {

    id: 1,
    name: 'Componentes de Pc',
    client:{
        name:'Andres',
        lastName: 'Doe',
        address: {
            country:'US',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15,
        }
    },
    company:{
        name: 'New Age',
        fiscalNumber: 665566,
    },
    items: [
        {
        id: 1,
        product: 'Razer Mouse',
        price: 69.99,
        quantity: 1
    },
    {
        id: 2,
        product: 'Cpu Intel i9',
        price: 100,
        quantity: 1
    },
    {
        id: 3,
        product: 'Monitor AOC-58P',
        price: 250,
        quantity: 1
    },
    {
        id: 4,
        product: 'Portatil ASUS TUF-15',
        price: 599,
        quantity: 1
    }
]
}