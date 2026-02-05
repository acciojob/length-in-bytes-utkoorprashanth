const byteSize = (str) => {
  // write your code here
	function byteSize(str) {
  // Create a Blob object with the input string
  const blob = new Blob([str]);
  
  // Return the size property, which gives the byte length
  return blob.size;
		
}

};
console.log(byteSize('hello world')); // Output: 11
console.log(byteSize('안녕하세요'));   // Output: 15
console.log(byteSize(''));            // Output: 0

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
