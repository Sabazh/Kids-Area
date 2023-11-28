
const saveFavouritesToLocal = (id,type,setLocal) => {
    const local = localStorage.getItem(type)
    if (local === null) {
      localStorage.setItem(type, JSON.stringify([id]))
      setLocal([id])
    }
    if (local) {
      const parsed = JSON.parse(local)
      let filteredMassive = []
      if (parsed.includes(id))
        filteredMassive = parsed.filter((item) => item !== id)
      else filteredMassive = [...parsed, id]
      localStorage.setItem(type, JSON.stringify(filteredMassive))
      setLocal(filteredMassive)
    }
  }
  export default saveFavouritesToLocal;