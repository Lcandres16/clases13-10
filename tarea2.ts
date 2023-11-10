function combine(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
    
      return a + b;
    }
    if (typeof a === 'string' || typeof b === 'string') {

      return `${a}${b}`;
    }
 
    return 'Cannot combine the specified types';
  }

  console.log(combine(5, 3));          
  console.log(combine('Hello, ', 'TS')); 
  console.log(combine(7, ' TypeScript')); 
  