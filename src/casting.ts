let age: any = 30
age = '30 anos'
console.log(age)

age = true
console.log(age)  


namespace casting {
    let age: any = 30;
    (age as number).toFixed()
    console.log((<number>age).toFixed())
    
    let name: string = 35 as unknown as string
    console.log(name)
    
    
}