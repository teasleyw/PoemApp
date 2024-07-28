// src/Pages/PoetryPage/PoetryPage.jsx
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonContainer,
  Poem,
  PoemAuthor,
  PoemTitle,
  PoemContainer,
  PoetryPageContainer,
  PoemText,
  PoemOfTheDay,
  ModalContent,
  CloseButton
} from "./PoetryPageStyled";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import SubmitPoem from "../../Components/SubmitPoem/SubmitPoem";
import FilterByAuthor from "../../Components/FilterByAuthor/FilterByAuthor";
import { updatePoemContent } from "../../redux/app-state-slice";
import { VerseCollection } from "../../utils/poemObjects";

const PoetryPage = ({ dispatch, customerData }) => {
  const [showSubmitPoemModal, setShowSubmitPoemModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
  const [filteredPoems, setFilteredPoems] = useState(VerseCollection);
  const [poemOfTheDay, setPoemOfTheDay] = useState(null);

  useEffect(() => {
    const poem = VerseCollection.find(poem => poem.poemOfTheDay);
    setPoemOfTheDay(poem);
  }, []);

  const openSubmitPoemModal = () => setShowSubmitPoemModal(true);
  const openFilterModal = () => setShowFilterModal(true);
  const exitSubmitPoemModal = () => setShowSubmitPoemModal(false);
  const exitFilterModal = () => setShowFilterModal(false);

  const handleFilter = (selectedAuthors) => {
    const filtered = VerseCollection.filter(poem => selectedAuthors.includes(poem.author));
    setFilteredPoems(filtered.length > 0 ? filtered : []);
    setCurrentPoemIndex(filtered.length > 0 ? 0 : -1);
  };

  const nextPoem = () => setCurrentPoemIndex((prevIndex) => (prevIndex + 1) % filteredPoems.length);
  const showPoemOfTheDay = () => {
    if (poemOfTheDay) {
      const index = filteredPoems.findIndex(poem => poem === poemOfTheDay);
      if (index !== -1) setCurrentPoemIndex(index);
    }
  };

  const currentPoem = filteredPoems[currentPoemIndex];

  return (
    <>
      <Modal visible={showSubmitPoemModal} animationType="slide">
        <ModalContent>
          <CloseButton onPress={exitSubmitPoemModal}>
            <Text>Close</Text>
          </CloseButton>
          <SubmitPoem />
        </ModalContent>
      </Modal>

      <Modal visible={showFilterModal} animationType="slide">
        <ModalContent>
          <FilterByAuthor
            isOpen={showFilterModal}
            onClose={exitFilterModal}
            onFilter={handleFilter}
          />
        </ModalContent>
      </Modal>

      <PoetryPageContainer>
        <Header customerData={customerData} dispatch={dispatch} />
        <ButtonContainer>
          <Button onPress={nextPoem} title="Next Poem" />
          <Button onPress={showPoemOfTheDay} title="Poem of the Day" />
          <Button onPress={openSubmitPoemModal} title="Submit Poem" />
          <Button onPress={openFilterModal} title="Filter By Author" />
        </ButtonContainer>
        <PoemContainer>
          {currentPoem ? (
            <Poem>
              {currentPoem === poemOfTheDay && <PoemOfTheDay>Poem of the Day</PoemOfTheDay>}
              <PoemTitle>{currentPoem.title}</PoemTitle>
              <PoemAuthor>{currentPoem.author}</PoemAuthor>
              <PoemText>{currentPoem.poem}</PoemText>
            </Poem>
          ) : (
            <Poem>
              <PoemTitle>No Poems available under those filters</PoemTitle>
            </Poem>
          )}
        </PoemContainer>
      </PoetryPageContainer>
    </>
  );
};

export default PoetryPage;