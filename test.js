class Statistics{
  constroctor(candidate, count){
    this.candidate = candidate;
    this.count = count;
  }
  log(number,verb ,pluralModifier){
    console.log('There ' + verb + ' ' + number + ' ' + this.candidate + ' ' + pluralModifier);
  }
  printGuessStatisticsNoBody() {
    let number = 'no',
      verb = 'are',
      pluralModifier = 's'; 
      log(number ,verb ,pluralModifier)
  }

  printGuessStatisticsOnePerson(){
    let number = 'one',
      verb = 'is',
      pluralModifier = ''; 
      log(number ,verb ,pluralModifier)
  }

  printGuessStatisticsOneMorePerson(count){
    let number = count,
      verb = 'is',
      pluralModifier = ''; 
      log(number ,verb ,pluralModifier)      
  }
}