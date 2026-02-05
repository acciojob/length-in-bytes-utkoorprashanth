const byteSize = (str) => {
  // write your code here
	function byteSize(str) {
  // Create a Blob object with the input string
  const blob = new Blob([str]);
  
  // Return the size property, which gives the byte length
  return blob.size;
		
}

};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
