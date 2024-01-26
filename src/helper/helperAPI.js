export const getDriveData = async () => {
  const res = await fetch('http://localhost:5000/drives')
  const driveData = await res.json()
  
  if(!res.ok){
    return console.log("an error ocurred")
  }

  return driveData

}

export const postDriveData = async (newData) => {
  const res = await fetch('http://localhost:5000/drives',{
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(newData)
  })

  if(!res.ok ){
    return console.log("An error ocurred")
  }
}