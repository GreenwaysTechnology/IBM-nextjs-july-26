// export default function GameLayout(props){
//     return <div id="gameLayout">
//         {/* Game Page content */}
//          {props.children}
//          {/* Teams Page Content */}
//          {
//             props.team
//          }
//          {/* Player Page content */}
//          {props.player}
//     </div>
// }
export default function GameLayout({children,team,player}){
    return <div id="gameLayout">
        {/* Game Page content */}
         {children}
         {/* Teams Page Content */}
         {
            team
         }
         {/* Player Page content */}
         {player}
    </div>
}