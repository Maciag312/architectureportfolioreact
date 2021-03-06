
import {SET_VIEW} from './actions';
import {SET_PROJECTS} from './actions';
import {SET_CATEGORIES} from './actions';
import {SET_CHOSENPROJECT} from './actions';

const initialState = {
  view: 'home', // projects
  categories: [{id: 0, name: "architecture", selected: true}, {id: 1, name: "design", selected: false}, {id: 2, name: "urbanism", selected: false}],
  projects: [{id: 0, name: "Compact swimming pool", title: "Compact swimming pool", selected: true, catg: 0, sdesc: "Project of compact swimming pool placed in Gliwice, polish town in Silesian Vovoideship.", desc: "Swimming pool proposal is an academic project of 2nd year of study circle. Aim of the project was to make deliberated and functional building regarding to all the construction regulations in Poland. Challenging issue was how to add a design value to the idea. The solution came with the process of analysing place of construction - Gliwice. Former german city that reminds about industrial heritage of the area. This resulted in massive, but toned design. What’s more, really important aspect of history of this town is it’s palm house. This also had huge impact on the design of the swimming pool. Final project consists of concrete construction connected with great glass walls surrounding pool area with tropical climate inside with specific for it flora.", imgbw:"Abasenczb-min.jpg", img:"Abasenkolor-min.jpg"  , scheme: "pływalnia_optimized.jpg"},{id: 1, name: "COMPETITION ARKxSITE Site chapel", title: "HISTORY LINE [team project]", selected: false, catg: 0, desc: "The area of study was Pessegueiro Island in Portugal. Despite it’s small size it has very rich history, and what’s most important, it is place that makes great impression on all sensen, it’s just kinda magic. We found out that there is a timeline on the island created by sequential buildings that starts with Roman remnants. It was an obvious choice to continue this, but what we did more was to divide chapel into two subsequent parts. The way people understand what is chapel is different for everyone. We didn’t want force anyone to follow our’s understanding. We designed space that supports people in their need to experience their spirtuality, enjoy solitude and social aspect of life  depending on which part of chapel they are in.", imgbw:"Akonkurs1czb-min.jpg", img:"Akonkurs1kolor-min.jpg"  , scheme: "konkursARKxSITE_optimized.jpg"},{id: 2, name: "COMPETITION Kaira Looro Peace Pavillion", title: "BY THE WAY [team project]", selected: false, catg: 0, sdesc: "BY THE WAY is a title of project of sustainable Peace Pavillion for Senegal in area of Sedhiou.", desc: "Aim of this project was to develop a sustainable design for Peace Pavillion in area of study. Architecture for peace depends on where is it placed. This issue was really challenging for us, meaning citizens of Europe, where the conditions of living are totally different than in Africa. Having done a strong research our team found out that what brings peace into challenging areas such as area of study is access to education, culture and sense of security. We decided not to bring architecture that will hit the newspaper’s covers but architecture which will fit the area, and situation where is it going to be developed. Following to this thought the philosophy that guided us through the design process was to bring structure, which will be made by locals for locals.", imgbw:"Akonkurs2czb-min.jpg", img:"Akonkurs2kolor-min.jpg"  , scheme: "konkursPeacePavillion_optimized.jpg"}
    , {id: 3, name: "CGI exterior", title: "CGI exterior", selected: false, catg: 1, sdesc: "CGI exterior inspired by Villa Neo House.", desc: "CGI exterior inspired by Villa NEO House which was designed by Querkopf Architekten.", imgbw:"exteriorczb-min.jpg", img:"exteriorkolor-min.jpg"  , scheme: "dummy.png"},{id: 4, name: "CGI interior", title: "CGI interior", selected: false, catg: 1, sdesc: "CGI interior inspired by Rapel House.", desc: "CGI interior inspired by Rapel House which was designed by Fantuzzi + Rodillo Arquitectos.", imgbw:"meksykczb-min.jpg", img:"meksykkolor-min.jpg"  , scheme: "dummy.png"},{id: 5, name: "CGI close-up", title: "CGI close-up", selected: false, catg: 1, sdesc: "CGI close-up with flowers.", desc: "CGI close-up with flowers.", imgbw:"closeup1czb-min.jpg", img:"closeup1kolor-min.jpg"  , scheme: "dummy.png"},{id: 6, name: "CGI interior", title: "CGI interior", selected: false, catg: 1, sdesc: "CGI interior inspired by apartment situated in Brooklyn.", desc: "CGI interior inspired by apartment situated in Brooklyn which was designed by Arnold Studio.", imgbw:"newyorkczb-min.jpg", img:"newyorkkolor-min.jpg"  , scheme: "dummy.png"},{id: 7, name: "CGI close-up", title: "CGI close-up", selected: false, catg: 1, sdesc: "CGI close-up with coffee.", desc: "CGI close-up with coffee.", imgbw:"closeup2czb-min.jpg", img:"closeup2kolor-min.jpg"  , scheme: "dummy.png"},{id: 8, name: "COMPETITION Mazda Design", title: "COMPETITION Mazda Design", selected: false, catg: 1, sdesc: "Logo proposal for Mazda Motor Corporation.", desc: "Mazda Logo proposal is strictly connected to Japan culture. It is an interpretation of symbol of Japan which is „Crane Flying across the Sun”. Bird is shown in 2 ways, 2D and isometric view. Depends on the view, wings and head of the bird, or just wings are shaped in „M” letter which is first letter of Mazda car manufacturer. Circle „Ensō” represents Sun. Logo was made using mixed teqniches of ArtPen and digital software.", imgbw:"mazdakolorczb-min.jpg", img:"mazdakolor-min.jpg"  , scheme: "dummy.png"},{id: 9, name: "COMPETITION Roca Design", title: "INTERNAL STORAGE SYSTEM", selected: false, catg: 1, sdesc: "Internal Storage System as a resolution for storageing bathroom’s appliances.", desc: "The idea of project is to develop a system that allows to move cabinets from external side of the bathroom surfaces to internal side of them, so to place a cabinets inside the structure of the wall. The resolution is dedicacted for framing construction building but it fits in others too.", imgbw:"rocaczb-min.jpg", img:"rocakolor-min.jpg"  , scheme: "dummy.png"},{id: 10, name: "CGI interior", title: "CGI interior", selected: false, catg: 1, sdesc: "CGI interior inspired by apartment in Tel Aviv 1/2.", desc: "CGI interior inspired by apartment in Tel Aviv which was design by Studio Maayan Zusman 1/2.", imgbw:"telaviv1czb-min.jpg", img:"telaviv1kolor-min.jpg", scheme: "dummy.png"},{id: 11, name: "CGI interior", title: "CGI interior", selected: false, catg: 1, sdesc: "CGI interior inspired by apartment in Tel Aviv 2/2.", desc: "CGI interior inspired by apartment in Tel Aviv which was design by Studio Maayan Zusman 2/2.", imgbw:"telaviv2czb-min.jpg", img:"telaviv2kolor-min.jpg", scheme: "dummy.png"}
    , {id: 12, name: "Świętochłowice", title: "Urban proposal for Świętochłowice [team project]", selected: false, catg: 2, sdesc: "Urban proposal for estate in Świętochłowice - town in southern part of Poland, which is member of Upper Silesian Metropolitan Union.", desc: "Urban proposal for estate in Świętochłowice - town in southern part of Poland, which is member of Upper Silesian Metropolitan Union. Project consists of two general parts. First one is housing with three different types of settlement. When it comes to the details, there appears preety lot of interesting solutions such as terraced design of the multi family houses or active ground floors with services for locals. In the heart of the proposal there are also placed two public facilities: school and old people’s house, in the spirit of connecting generations. Second main part is green space between new estate and existing one. This solution connects all the designed area with recreational zone and improves quality of it’s neighbourhood at the same time.", imgbw:"Aurbanistykaczb-min.jpg", img:"Aurbanistykakolor-min.jpg", scheme: "urbanistykaALL-min.jpg"}
  ],
  chosenproject: {id: 0, name: "Compact swimming pool", title: "Compact swimming pool", selected: true, catg: 0, sdesc: "Project of compact swimming pool placed in Gliwice, polish town in Silesian Vovoideship.", desc: "Swimming pool proposal is an academic project of 2nd year of study circle. Aim of the project was to make deliberated and functional building regarding to all the construction regulations in Poland. Challenging issue was how to add a design value to the idea. The solution came with the process of analysing place of construction - Gliwice. Former german city that reminds about industrial heritage of the area. This resulted in massive, but toned design. What’s more, really important aspect of history of this town is it’s palm house. This also had huge impact on the design of the swimming pool. Final project consists of concrete construction connected with great glass walls surrounding pool area with tropical climate inside with specific for it flora.", imgbw:"Abasenczb-min.jpg", img:"Abasenkolor-min.jpg"  , scheme: "pływalnia_optimized.jpg"}
};

export default function mainReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case SET_VIEW:
        
        return {
            view: action.payload,
            categories: state.categories,
            projects: state.projects,
            chosenproject: state.chosenproject,

        };
      case SET_PROJECTS: 
        return{
            
          view: state.view,
          categories: state.categories,
            projects: action.payload,
            chosenproject: state.chosenproject,
            
        };
      case SET_CATEGORIES: 
        return{
            view: state.view,
            categories: action.payload,
            projects: state.projects,
            chosenproject: state.chosenproject,
            
        };
      case SET_CHOSENPROJECT: 
      return{
        view: state.view,
        categories: state.categories,
        projects: state.projects,
        chosenproject: action.payload
        
      }  
      default:
        return state;
    }
  }
  