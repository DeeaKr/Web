
var imgArray=['glob16.png','glob2.png','glob3.png','glob4.png','glob5.png','glob6.png','glob7.png','glob8.png','glob9.png','glob10.png'
,'glob11.png','glob12.png','glob13.png','glob14.png','glob15.png','']

var randArray=[];
var rand = imgArray[Math.floor(Math.random() * imgArray.length)];

for (var i = 0; i < 16; i++) {
    
    while(randArray.includes(rand))
    {
        rand = imgArray[Math.floor(Math.random() * imgArray.length)];
    }
    
    randArray.push(rand);
   // var image = new Image();
    //image.src = rand;
    
}






var matr=[];
for(var i=0;i<16;i+=4)
 {
   matr.push([randArray[i],randArray[i+1],randArray[i+2],randArray[i+3]])
 }

 var table=document.getElementById("table");

    for(var l=0;l<4;l++)
        {
            
            
            table.rows[0].cells[l].innerHTML="<img src="+matr[0][l]+" alt='hello' width='400' height='550'/>";
            
            
            table.rows[1].cells[l].innerHTML="<img src="+matr[1][l]+" alt='hello' width='400' height='550'/>";
            
         
            table.rows[2].cells[l].innerHTML="<img src="+matr[2][l]+" alt='hello' width='400' height='550'/>";
          
            
           
            table.rows[3].cells[l].innerHTML="<img src="+matr[3][l]+" alt='hello' width='400' height='550'/>";
            
        }




        function myfunction(line,col,param)
        {
        
            
            if(line==0 && col==0)
            {
              if(matr[line+1][col]=="")
              {
                  
                matr[line+1][col]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line][col+1]=="")
              {
                matr[line][col+1]=matr[line][col];
                matr[line][col]="";
              }
        
            }
            else if(line==0 && col==3)
            {
              if( matr[line][col-1]=="")
              {
                matr[line][col-1]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line+1][col]=="")
              {
                matr[line+1][col]=matr[line][col];
                matr[line][col]="";
              }
            }
            else if(line==0)
            {
              if(matr[line+1][col]=="") 
              {
                matr[line+1][col]=matr[line][col];
                matr[line][col]="";
              }
              if( matr[line][col+1]=="")
              {
                matr[line][col+1]=matr[line][col];
                matr[line][col]="";
        
              }
              if( matr[line][col-1]=="")
              {
        
                matr[line][col-1]=matr[line][col];
                matr[line][col]="";
              }
        
            }
            else if(col==0 && line==3)
            {
              if(matr[line][col+1]=="")
              {
                matr[line][col+1]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line-1][col]=="")
              {
                matr[line-1][col]=matr[line][col];
                matr[line][col]="";
              }
            }
            else if(col==0)
            {
              if(matr[line][col+1]=="")
              {
                matr[line][col+1]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line-1][col]=="")
              {
                matr[line-1][col]=matr[line][col];
                matr[line][col]="";
        
              }
              if(matr[line+1][col]=="")
              {
                matr[line+1][col]=matr[line][col];
                matr[line][col]="";
              }
            }
            else if(line==3 && col==3)
            {
              if(matr[line][col-1]=="")
              {
                matr[line][col-1]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line-1][col]=="")
              {
                matr[line-1][col]=matr[line][col];
                matr[line][col]="";
              }
            }
            else if(line==3)
            {
              if(matr[line][col+1]=="")
              {
                matr[line][col+1]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line][col-1]=="")
              {
                matr[line][col-1]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line-1][col]=="")
              {
                matr[line-1][col]=matr[line][col];
                matr[line][col]="";
              }
            }
            else if(col==3)
            {
              if(matr[line][col-1]=="")
              {
                matr[line][col-1]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line+1][col]=="")
              {
                matr[line+1][col]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line-1][col]=="")
              {
                matr[line-1][col]=matr[line][col];
                matr[line][col]="";
              }
            }
            else {
              if(matr[line][col+1]=="")
              {
                matr[line][col+1]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line][col-1]=="")
              {
                matr[line][col-1]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line-1][col]=="")
              {
                matr[line-1][col]=matr[line][col];
                matr[line][col]="";
              }
              if(matr[line+1][col]=="")
              {
                matr[line+1][col]=matr[line][col];
                matr[line][col]="";
              }
            }
        
            for(var l=0;l<4;l++)
            {
                
                
                table.rows[0].cells[l].innerHTML="<img src="+matr[0][l]+" alt='hello' width='400' height='550'/>";
                
                
                table.rows[1].cells[l].innerHTML="<img src="+matr[1][l]+" alt='hello' width='400' height='550'/>";
                
             
                table.rows[2].cells[l].innerHTML="<img src="+matr[2][l]+" alt='hello' width='400' height='550'/>";
              
                
               
                table.rows[3].cells[l].innerHTML="<img src="+matr[3][l]+" alt='hello' width='400' height='550'/>";
                
            }
        
        
        }