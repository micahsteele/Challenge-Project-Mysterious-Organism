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
  
function pAequorFactory(num, func) {
    return {
        specimenNum: num,
        dna: mockUpStrand(),
        mutate() {
            let spot = Math.floor(Math.random() * this.dna.length)
            console.log('location: ' + spot)
            let index = this.dna[spot]
            let base = index
            console.log(`index: ` + index)
            while(index == base) {
                base = returnRandBase()
            }
            console.log(`base: `+ base)
            return this.dna[spot] =  base
        },
        compareDNA(otherDNA) {
            let shared = 0;
            let sharedDNA = [];
            for(let i = 0; i < this.dna.length; i++) {
                if(this.dna[i] === otherDNA.dna[i]) {
                shared++
                sharedDNA.push(this.dna[i])
                };
            };
            console.log(sharedDNA);
            let percentageShared = (shared / this.dna.length) * 100;
            console.log(`specimen #1 and specimen #2 have ${percentageShared.toFixed(1)}% DNA in common`);
        },
        willLikelySurvive() {
        let numberOfTimes = 0
        for(let i = 0; i < this.dna.length; i++) {
            if(this.dna[i] == 'C') {
            numberOfTimes++
            } else if (this.dna[i] == 'G') {
            numberOfTimes++
            }
            }
        if(numberOfTimes >= 9) {
            return true
        } else {
            return false
        }
        },
        complementStrand() {
            let complementaryStrand = [];
            for(let i = 0; i < this.dna.length; i++) {
              if (this.dna[i] == 'C') {
                complementaryStrand.push('G')
              } else if (this.dna[i] == 'G') {
                complementaryStrand.push('C')
              } else if (this.dna[i] == 'A') {
                complementaryStrand.push('T')
              } else if (this.dna[i] == 'T') {
                complementaryStrand.push('A')
              }
            }
            return complementaryStrand;
          }
    }
};
  
  const test = pAequorFactory(1, mockUpStrand());
  const test2 = pAequorFactory(2, mockUpStrand());
  console.log(test);
  test.mutate();
  console.log('mutated: ' + test.dna);
  test.compareDNA(test2);
  test.willLikelySurvive();
  
  function createTestRequests(num) {
    const testRequests = [];
    let id = 1;
    while(testRequests.length < num) {
      const testDNA = pAequorFactory(id, mockUpStrand)
      if(testDNA.willLikelySurvive()) {
        testRequests.push(testDNA)
        id++
      }
    }
    return testRequests
  };
  console.log(createTestRequests(30));
  console.log(test.complementStrand());

