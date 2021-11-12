import { useState, useEffect, useCallback } from 'react';

import { Input } from '../../components/Input';

import { phrases } from '../../utils/phrases';

import {
  Container,
  Title,
  TitleMarked,
  Content,
  Phrase,
  HighlightedPhrase,
  MotivationalPhrase,
  AddMoreAchievements,
  Footer,
} from './styles';

const RANDOM_INDEX = Math.floor(
  Math.random() * phrases.length
);
const MOTIVATIONAL_PHRASE = phrases[RANDOM_INDEX];

const STORAGE_KEY = '@youalreadydid:achievements';

export function Home() {
  const [achievement, setAchievement] = useState('');
  const [newAchievement, setNewAchievement] = useState('');
  const [showAddNewAchievementInput, setShowAddNewAchievementInput] = useState(false);

  const toggleShowAddNewAchievementInput = useCallback(() => {
    setShowAddNewAchievementInput(!showAddNewAchievementInput);
  }, [showAddNewAchievementInput]);

  const handleChangeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNewAchievement(value);
  }, []);

  const getLocalStorageAchievement = useCallback(() => {
    const savedAchievements = localStorage.getItem(STORAGE_KEY);
    const savedAchievementsArray = JSON.parse(savedAchievements ?? '[]');

    const randomIndex = Math.floor(
      Math.random() * savedAchievementsArray.length
    );

    const randomAchievement = savedAchievementsArray[randomIndex] ?? '';

    setAchievement(randomAchievement);
  }, []);

  const handleSubmitInput = useCallback(() => {
    const savedAchievements = localStorage.getItem(STORAGE_KEY);
    const savedAchievementsArray = JSON.parse(savedAchievements ?? '[]');

    savedAchievementsArray.push(newAchievement);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedAchievementsArray));

    setNewAchievement('');
    getLocalStorageAchievement();
  }, [newAchievement, getLocalStorageAchievement]);

  useEffect(() => {
    getLocalStorageAchievement();
  }, [getLocalStorageAchievement]);

  return (
    <Container>
      <Title>
        Hey, you already <TitleMarked>did</TitleMarked>!
      </Title>

      <Content>
        {achievement ? (
          <>
            <Phrase>
              You {' '}
              <HighlightedPhrase>
                {achievement}
              </HighlightedPhrase>!
            </Phrase>

            <MotivationalPhrase>
              {MOTIVATIONAL_PHRASE}
            </MotivationalPhrase>
          </>
        ) : (
          <Phrase>
            Click <HighlightedPhrase>What else did you do?</HighlightedPhrase> button to register a new achievement.
          </Phrase>
        )}
      </Content>

      <Footer>
        {showAddNewAchievementInput && (
          <Input
            handleConfirm={handleSubmitInput}
            placeholder="created a new website"
            onChange={handleChangeText}
            value={newAchievement}
          />
        )}

        <AddMoreAchievements
          onClick={toggleShowAddNewAchievementInput}
        >
          What else did you do?
        </AddMoreAchievements>
      </Footer>
    </Container>
  );
}