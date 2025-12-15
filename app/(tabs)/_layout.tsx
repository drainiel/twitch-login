import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

// Layout per le tab di navigazione usando NativeTabs, che fornisce una navigazione a schede nativa.
// Ogni tab è rappresentata da un Trigger con un'icona e un'etichetta. 
// sf indica l'icona di sistema da utilizzare su iOS, mentre drawable è usato per Android.
// documentazione: https://docs.expo.dev/router/advanced/native-tabs/

export default function TabLayout() {
  return (
    <NativeTabs minimizeBehavior="onScrollDown">
      <NativeTabs.Trigger name="home">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable='ic_house' />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Icon sf="person.crop.circle" drawable='ic_person' />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="feed" >
        <Icon sf="list.bullet" drawable='ic_list' />
        <Label>Feed</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role="search" >
        <Icon sf="magnifyingglass" drawable='ic_search' />
        <Label>Search</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}