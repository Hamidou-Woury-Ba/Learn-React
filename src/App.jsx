import Header from "./Header"
import Footer from "./custom/Footer"
import Card from "./components/AllComponents/Card/Card"
import Button from "./Button/Button"
import Student from "./Student"
import UserGreetings from "./UserGreetings"
import List from "./components/AllComponents/ListsFruitsLegumes/component/ListFruitsLegumes"
import Boutton from "./Boutton"
import ProfilePicture from "./ProfilePicture"
import Counter from "./components/AllComponents/Counter"
import MyComponent from "./components/AllComponents/Forms/components/MyComponent"
import MyComponentForm from "./components/AllComponents/Forms/components/MyComponentForm"
import ColorPicker from "./components/AllComponents/ColorPicker/ColorPicker"
import MyCarComponent from "./components/AllComponents/Forms/components/MyCarComponent"
import ImportArrayListComponent from "./components/AllComponents/ImportArrayListComponent"
import MyCarObjectComponent from "./components/AllComponents/Forms/components/MyCarObjectComponent"
import ToDoList from "./components/AllComponents/TODOLIST/ToDoList"
import MyUseEffectComponent from "./components/AllComponents/ReactHooks/components/UseEffect/MyUseEffectComponent"
import DigitalClock from "./components/AllComponents/DigitalClock/DigitalClock"
import ComponentA from "./ComponentA"
import MyUseRefComponent from "./MyUseRefComponent"
import StopWatch from "./components/AllComponents/Watch/StopWatch"
import Index from "./Index"


/*React hook
  React hook : fonction spéciale qui permet aux composants fonctionnels d’utiliser React future sans écrire de composant de classe
*/

/*useState()
  useState : Un hook react qui permet la création d’une variable avec état et une fonction settler pour mettre à jour sa valeur dans un DOM virtuel
*/

/*Fonction de mise à jour : 
    Une fonction en tant qu’argument de setState() généralement
    Autoriser des mises à jour sécurisées en fonction de l’état précédent
    Utilisé avec plusieurs mises à jour d’état et fonctions asynchrones
    Bonne pratique d’utilisation des fonctions de mise à jour
*/

/*useEffect(function, [dependencies])
  Hook React qui dit à React de faire du code quand (choisissez-en un) : 
    Ce composant effectue un nouveau rendu
    ce composant monte
    l’état d’une valeur change

    1. useEffect(() => {}) exécuter après chaque re-rendu
    2. useEffect(() => {}, []) exécuter lorsque qu'il monté
    3. useEffect(() => {}, [value]) exécuter lorsque qu'il monté et lorsque le valeur change
*/

/*useContent()
  React Hook qui permet de partager des valeurs entre plusieurs niveaux de composants sans passer de props à travers chaque niveau
 */

/*useRef()
  Ne provoque pas de nouveau rendu lorsque sa valeur change.
  Lorsque vous voulez qu’un composant se rappelle de certaines informations, mais que vous ne voulez pas que ces informations déclenchent de nouveaux rendus
*/   
  function App() {

  return (
    <>
      <Index   />
    </>
  )
}

export default App
