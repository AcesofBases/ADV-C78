var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://thumbs.dreamstime.com/b/father-s-day-handsome-dad-superhero-costume-greeting-card-vector-illustration-white-background-184346601.jpg", "https://cdn2.vectorstock.com/i/thumb-large/70/06/beautiful-young-woman-in-casual-clothes-cartoon-vector-32487006.jpg" , "https://media.istockphoto.com/vectors/boy-jumping-vector-id165671834?k=6&m=165671834&s=612x612&w=0&h=JQj7g2lbFFv7fX7W1jH2K87Vfn_YZoxStdq-PEjskLU=", "https://i.pinimg.com/originals/97/f2/be/97f2be1f146f313d7e0242ff9f68a3b4.jpg", "https://image.shutterstock.com/image-vector/cute-baby-girl-holds-out-260nw-739160773.jpg", "https://image.shutterstock.com/image-vector/illustration-smiling-cartoon-girl-pink-260nw-241914838.jpg"];
var names = ["Family Book","Gavin Dineen", "Kristin Dineen", "Ace Dineen", "Eve Dineen", "Ava dineen", "Ivy Dineen" ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
