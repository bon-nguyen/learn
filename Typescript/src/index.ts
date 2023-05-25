interface Button {
    label: string;
    onClick: ()=> void
}

const button:Button = {
    label: 'submit',
    onClick: ()=> {
        console.log('Click')
    }
}

interface IconButton extends Button{
    icon: string
}

const addToCartBtn:IconButton = {
    label: 'Add to cart',
    onClick: ()=> {
        console.log('Click')
    },
    icon: 'card-icon'

}




// const contact1 = { pet: {name: 'A'}}
// const contact2 = { }



interface Pet {
    name: string
}

interface Contract {
    name: string
    phone: string
    email?: string
    pet?: Pet
}

// const contracts: Contract[] = []

// const newContract: Contract = {
//     name: 'Nguyen Van a',
//     phone: '123',
//     email: '234',
//     pet: { name: 'a'}
// }

// const otherContract: Contract = {
//     name: 'B',
//     phone: 'c'
// }

// function getPetName(contact: Contract): string{
//     return  contact.pet?.name || ''
// }


class MyContact implements Contract {
    name: string
    phone: string

    constructor(name: string, phone: string){
        this.name = name
        this.phone = phone
    }
}

const a = new MyContact("a", "123")

class ContactApp {
    render(){
        const contacts: Contract[] = [
            { name: 'A', phone: '123'},
            { name: 'B', phone: '456'},
        ]
        console.table(contacts)
    }
}

const app = new ContactApp()
app.render()










// const myName: string = 'CodeX'
// const age: number = 3
// const isFree: boolean = true
// const someVar: undefined = undefined
// const anotherVar: null = null

// console.log(typeof myName)
// console.log(typeof age)
// console.log(typeof isFree)
// console.log(typeof someVar)
// console.log("aaa",typeof anotherVar)


// import { Mailer } from './mailer'

// function sum(a: number, b: number): number {
//        return a + b
// }

// const multiply = (a: number, b: number): number => a * b

// // const sendEmail = async ({ email, subject, content}: { email: string, subject: string, content: string }) => {
// //     const res = await Mailer(email, subject, content)
// //     return res
// // }

// console.log(sum(5, 11))

// function wailAndDo (callback: (params: string) => void){
//     setTimeout(()=> {
//         callback('Ops')
//     },1000)
// }

// const cb = (params: string)=> {

// }
//
// wailAndDo(cb)



// interface Contract {
//     name: string
//     phone: string
//     email?: string
// }


// const contracts: Contract[] = []

// const newContract: Contract = {
//     name: 'Nguyen Van a',
//     phone: '123',
//     email: '234'
// }

// const otherContract: Contract = {
//     name: 'B',
//     phone: 'c'
// }

// contracts.push(newContract)

