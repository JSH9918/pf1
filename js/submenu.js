
$(document).ready(function(){
//    $("body").css({"background-color":"red","border-top":"5px solid"});
//    $("body").css("background-color","blue");
//li에 마우스를 올리면 실행하시오 $("li").hover();
   $("ul.gnb > li").hover(//hover 사용자행위(이벤트)
       function(){ 
            $("ul.submenu").removeClass("submenuup");
             //마우스엔터 mouseenter이벤트
                // this는 hover한 li,addClass()는 클래스를 붙여라
                //children() 앞요소의 자식요소
                // 서브메뉴에 애니가 없다면
                
                if($("ul.submenu").hasClass("submenuani")==0){//애니클래스가 없다면
                    $(this).find("ul.submenu").addClass("submenuani");//서브메뉴 애니메이션되게 클래스를 붙임
                    $(this).siblings().find("ul.submenu").removeClass("submenuani");//해당 태그를 제외한 다른 형제태그에 클래스를 없앰 
                    $(this).find("ul.submenu").addClass("submenushow");//서브메뉴가 보이게 클래스를 붙임
                    $(this).siblings().find("ul.submenu").removeClass("submenushow");
                    console.log("1~if");//콘솔에서 보이게끔 해줌
                }
                //서브메뉴에 애니가 없지 않다면
                else{
                    //서브메뉴에 애니가 없는게 틀렸다면
                    if($(this).find("ul.submenu").hasClass("submenuani")==1){//애니클레스를 가지고 있다면
                        $(this).find("ul.submenu").removeClass("submenuani");//애니메이션 클래스 삭제
                        $(this).find("ul.submenu").addClass("submenushow");//서브메뉴 보여주는 클래스 추가
                        $(this).siblings().find("ul.submenu").addClass("submenuani");//해당태그를 제외한 형제태그에 애니 클래스 추가
                        $(this).siblings().find("ul.submenu").removeClass("submenushow");//해당태그를 제외한 형제태그에 서브메뉴 보여주는 클래스 삭제
                        console.log("2~else>if");
                    }
                    //서브메뉴에 애니가 없지않고 있지도 않다면
                    else{//애니 클래스가 없는게 맞다면
                        $(this).find("ul.submenu").addClass("submenushow");
                        $(this).siblings().find("ul.submenu").removeClass("submenushow");
                        console.log("2~else>else");
                    }                        
                }
                // if($(this).find("ul.submenu").hasClass("submenuani")==1){
                //     $(this).find("ul.submenu").removeClass("submenuani");
                // }
                
                //siblings() 앞요소를 제외한 나머지형제요소들
                // removeClass() 클래스를 없애라.
                $(".close").remove();
                $("ul.submenu").append("<button class='close'>닫기</button>");
                // 닫기버튼을 클릭하면 실행하시오.
                $(".close").click(
                    function(){
                        $("ul.submenu").removeClass("submenuani submenushow");
                        $(this).parent("ul.submenu").addClass("submenuup");
                    }
                );
                
            }, 
        );
        $("ul.gnb > li").mouseleave(
            function(){ //마우스나갔을때 mouseleave이벤트 
                $("ul.submenu").find(".close").remove();
                $(this).find("ul.submenu").removeClass("submenuani");
                $(this).find("ul.submenu").removeClass("submenushow");    
                $(this).children("ul.submenu").addClass("submenuup");           
            }
        );          
   }
)        
