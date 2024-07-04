import React, {RefObject, useCallback, useMemo, useState} from 'react';
import {View} from 'react-native';
import {Divider} from './components/Divider';
import {Header} from './components/Header';
import {ObjectiveCard} from './components/ObjectiveCard';
import {SelectFilters} from './components/SelectFilters';
import {SelectPeriod} from './components/SelectPeriod';
import {HomeStyles} from './styles';
import {Status, toDoMockedData} from './mockData';
import {WeeklyCard} from './components/WeklyCard';
import {OverallCard} from './components/OverallCard';
import {ScrollView} from 'react-native-gesture-handler';

const Today = ({scrollViewRef}: {scrollViewRef: RefObject<ScrollView>}) => {
  const [toDos, setToDos] = useState(toDoMockedData);
  const [filterdData, setFilterdData] = useState('All');

  const skkipedMockedData = useMemo(
    () =>
      toDos.filter(
        ({status, period}) =>
          status === Status.SKKIPED &&
          (period === filterdData || filterdData === 'All'),
      ),
    [filterdData, toDos],
  );
  const completedMockedData = useMemo(
    () =>
      toDos.filter(
        ({status, period}) =>
          status === Status.COMPLETED &&
          (period === filterdData || filterdData === 'All'),
      ),
    [filterdData, toDos],
  );
  const inProgressMockedData = useMemo(
    () =>
      toDos.filter(
        ({status, period}) =>
          status === Status.IN_PROGRESS &&
          (period === filterdData || filterdData === 'All'),
      ),
    [filterdData, toDos],
  );

  const handleObjective = useCallback(
    (id: string, status: Status) => {
      setToDos(prev =>
        prev.map(toDo => (toDo.id === id ? {...toDo, status} : toDo)),
      );
    },
    [setToDos],
  );

  return (
    <View>
      <SelectPeriod
        selectedFilter={filterdData}
        setSelectedFilter={setFilterdData}
      />
      {inProgressMockedData.map((objectiveCard, index) => (
        <ObjectiveCard
          {...objectiveCard}
          handleObjective={handleObjective}
          scrollViewRef={scrollViewRef}
          key={index}
        />
      ))}
      {skkipedMockedData.length > 0 && <Divider text="Skipped" />}
      {skkipedMockedData.map((objectiveCard, index) => (
        <ObjectiveCard
          {...objectiveCard}
          handleObjective={handleObjective}
          scrollViewRef={scrollViewRef}
          key={index}
        />
      ))}
      {completedMockedData.length > 0 && <Divider text="Completed" />}
      {completedMockedData.map((objectiveCard, index) => (
        <ObjectiveCard
          {...objectiveCard}
          handleObjective={handleObjective}
          scrollViewRef={scrollViewRef}
          key={index}
        />
      ))}
    </View>
  );
};

const Weekly = () => {
  return (
    <View>
      {toDoMockedData.map((objectiveCard, index) => (
        <WeeklyCard {...objectiveCard} key={index} />
      ))}
    </View>
  );
};

const Overall = () => {
  return (
    <View>
      {toDoMockedData.map((objectiveCard, index) => (
        <OverallCard {...objectiveCard} key={index} />
      ))}
    </View>
  );
};

export const Home = ({
  scrollViewRef,
}: {
  scrollViewRef: RefObject<ScrollView>;
}) => {
  const [selected, setSelected] = useState('Today');

  const selectFilter = useCallback((label: string) => {
    setSelected(label);
  }, []);

  if (selected === 'Weekly') {
    return (
      <View style={HomeStyles.container}>
        <Header />
        <SelectFilters selectedFilter={selected} selectFilter={selectFilter} />
        <Weekly />
      </View>
    );
  }

  if (selected === 'Overall') {
    return (
      <View style={HomeStyles.container}>
        <Header />
        <SelectFilters selectedFilter={selected} selectFilter={selectFilter} />
        <Overall />
      </View>
    );
  }

  return (
    <View style={HomeStyles.container}>
      <Header />
      <SelectFilters selectedFilter={selected} selectFilter={selectFilter} />
      <Today scrollViewRef={scrollViewRef} />
    </View>
  );
};
