import React from 'react'

export default function SomeFile() {


    const myobject = {
        key1:"1",
        key2:"2",
    }

    let mykey = "key1"

    let x= myobject?.[mykey]

    const [form, setForm] = React.useState<any>({})
const onChangeInput = ({target:{name, value}}) => {
    setForm(prevForm => ({...prevForm,[name]: value}))
}

React.useEffect(()=>{
    console.log('form',form)
},[form])
//the useEffects fucntion has two arguments an arrow functino that we set it to do whatver
//and an array [] that is the condtional thingyt, if we remove it will run everytime


  return (
    <div style={{
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <input
            name="name"
            placeholder='Full Name'
            onChange={onChangeInput}
            value={form?.['name']}
            style={{
                marginBottom:35
            }}
        />
              <input
            name="email"
            placeholder='Email Address'
            onChange={onChangeInput}
            value={form?.['email']}
            style={{
                marginBottom:35
            }}
        />
              <input
            name="phone"
            placeholder='Phone Number'
            onChange={onChangeInput}
            value={form?.['phone']}
            style={{
                marginBottom:35
            }}
        />

        <p>Full name: {form?.['name']}</p>
    
    </div>
  )
}
