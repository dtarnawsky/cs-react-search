import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import { useCallback, useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [searchText, performSearch] = useState('');
  const people: Array<string> = ['John Smith', 'Smithers', 'Johnas', 'Smiley Joe', 'Joen Smith', 'John Williams', 'Jeff Joe'];

  const onInputChanged = useCallback((searchText) => {
    console.log(`performSearch for ${searchText}`);
    performSearch(searchText);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Find</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Find</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar
          placeholder="test"
          onIonChange={e => { onInputChanged(e.detail.value); }}
          // value={searchInputValue}
          inputMode="search"
          className='newChatHeaderStyling'
          debounce={300}
        // ref={searchInputRef}
        ></IonSearchbar>
        <IonList>
          {people.filter(name => name.toLowerCase().includes(searchText.toLowerCase())).map(filteredName => (
            <IonItem>
              {filteredName}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
