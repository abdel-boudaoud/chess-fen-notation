class Board {
    constructor() {
      this.PieceSelected = false
      this.CursorPosition = ""
      this.FenStart ="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
      this.PieceURL = {
          r: "url('pieces/bRook.png')",
          n: "url('pieces/bKnight.png')",
          b: "url('pieces/bBishop.png')",
          q: "url('pieces/bQueen.png')",
          k: "url('pieces/bKing.png')",
          p: "url('pieces/bPawn.png')",
          N: "url('pieces/wKnight.png')",
          B: "url('pieces/wBishop.png')",
          Q: "url('pieces/wQueen.png')",
          K: "url('pieces/wKing.png')",
          P: "url('pieces/wPawn.png')",
          R: "url('pieces/wRook.png')",
        }
      this.PositionPieces = {
        1:'r',
        2:'n',
        3:'b',
        4:'q',
        5:'k',
      }

    }
    //pass where you want to display the board 
    displayBoard = (divClass) => {
        let board = document.querySelector(`.${divClass}`)

        for (let i = 1; i < 65; i++) {
            // board.innerHTML = `<div class="sqaure n${i}>test</div>`
            board.innerHTML += `<div class="square n${i}"" onclick="move('${i}')" ></div>`
        }
        let squares = [9,16,25,32,41,48,57,64]
        squares.forEach(square => {
            x.colorBoard(square)
        })
        //displaying the pieces
        this.displayPieces(this.FenStart)
    }
    //board coloring 
    colorBoard = (x) => {
        let on = 0;
        for (let i = x - 8; i < x+1; i++) {
            if (on == 0) {
                document.querySelector(`.n${i}`).classList.add("dark")
                on = 1
            } else if (on == 1) {
                document.querySelector(`.n${i}`).classList.add("light")
                on = 0
            }
        }
    }
    //adding PNGs to the board
    displaySinglePiece = (sqaureNumber, pieceType="") =>{
        let piece = document.querySelector(`.n${sqaureNumber}`)
        if (Object.keys(this.PieceURL).includes(pieceType)){
        piece.style.backgroundImage = this.PieceURL[pieceType]
        }else{piece.style.backgroundImage = "url()"
          
        }

        
        
       
    }
    //empty
    clearPieces = ()=>{
        for(let i =1; i < 65;i++){
            document.querySelector(`.n${i}`).style.backgroundImage = "url()"
            
        }
    }
    //dispalying every piece using FEN
    displayPieces = (fen)=>{
        this.clearPieces()
        let fenArray = fen.split("")
        let index = 1
        for(let i= 1;i < 65;i++){
            
            if(i == fenArray.length+1){
                break
            }else if(parseInt(fenArray[i-1])){
                
                index += parseInt(fenArray[i-1])

            }else if(fenArray[i-1] == "/"){
                //getting current position 
                if(parseInt(fenArray[i-2])){
                    continue
                }else{
                    //figure out a function for this or a way to tell if the value is under a certain breakpoint
                    if(index < 9){
                        let x = 9 - index 
                        index += x
                        console.log(index)
                    }else if(index > 9 && index <  17){
                        let x = 17 - index 
                        index += x
                        console.log(index)
                    }else if(index > 17 && index < 25){
                        let x = 25 - index 
                        index += x
                    }else if(index > 25 && index < 33){
                        let x = 33 - index 
                        index += x
                    }else if(index > 33 && index < 41){
                        let x = 41 - index 
                        index += x
                    }else if(index > 41 && index < 49){
                        let x = 49 - index 
                        index += x
                    }else if(index > 41 && index < 57){
                        let x = 57 - index 
                        index += x
                    }
                }
                
                //figure out a way to this  with a function later 
            }else{
                this.displaySinglePiece(index, fenArray[i-1])
                console.log("index => " ,index,
                            "fenArray => ",fenArray[i-1])
                if(!parseInt(fenArray[i-1])){
                    index+=1
                }
            }
        }
        
            
        
    }
    
   


}
let x = new Board()
x.displayBoard("board")

// add this as a function somewhere to the class 


function move(pieceNumber){
   let pieceDiv = document.querySelector(`.n${pieceNumber}`)
   if(x.PieceSelected && x.CursorPositon != pieceNumber){
      console.log(pieceNumber)
      
      x.displaySinglePiece(pieceNumber,this.PositionPieces[pieceNumber])
      x.displaySinglePiece(x.CursorPostion)
      x.PieceSelected = false
   }else{
      x.PieceSelected = true
      x.CursorPostion = pieceNumber
   }
} 
      


let btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
    let fen = document.querySelector("input")
    
    x.displayPieces(`${fen.value}`)
})

// add custom colors using the constructor maybe??? 

// css later 


