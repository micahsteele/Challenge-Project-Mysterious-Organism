// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  let num = Math.floor(Math.random() * 10000)
  
  function pAequorFactory(num, func) {
    return {
      specimenNum: num,
      dna: mockUpStrand(),
      mutate() {
        let spot = Math.floor(Math.random() * this.dna.length)
        console.log(spot)
        let index = this.dna[spot]
        let base = index
        console.log(`index: ` + index)
        while(index == base) {
              base = returnRandBase()
           }
        console.log(`base: `+ base)
        return this.dna[spot] =  base
      }
      compareDNA(this.dna) {
  
      }
    }
  }
  
  
  let test = pAequorFactory(1, mockUpStrand());
  console.log(test);
  test.mutate()
  console.log(test.dna)