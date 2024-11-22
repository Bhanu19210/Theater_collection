function toggleAccordion(header) {
   var content = header.nextElementSibling;
   var symbol = header.querySelector('.fa-plus');
   var symbol = header.querySelector('.fa-minus');


   // Toggle the display property of the content
   if(content.style.display === 'block'){
    content.style.display = 'none';
    
   }
   else{
    content.style.display = 'block';
   }
   
 }