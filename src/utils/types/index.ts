import {StackNavigationProp} from '@react-navigation/stack';
import {MainRoutes, ThemeTypeEnum} from '../enums';
import {RouteProp} from '@react-navigation/native';
import {AxiosRequestConfig} from 'axios';

interface ColorsThemeTypes {
  primary: string;
  background: string;
  text: string;
  secondary: string;
}

interface Theme {
  colors: ColorsThemeTypes;
}

type ThemeTypes = ThemeTypeEnum.LIGHT | ThemeTypeEnum.DARK;

type ModeContextType = {
  theme: ColorsThemeTypes;
  setTheme: () => void;
  changeTheme: (e: ThemeTypes) => void;
};

interface HomeCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface DetailsCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    items: {
      name: string;
    }[];
  };
}

interface CharacterThumbnail {
  path: string;
  extension: string;
}

interface CharacterComic {
  name: string;
}

interface CharacterComics {
  available: number;
  items: CharacterComic[];
}

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: CharacterThumbnail;
  comics: CharacterComics;
}

type CharacterDetailScreenRouteProp = RouteProp<
  MainStackParamList,
  MainRoutes.CharacterDetail
>;

type CharacterDetailScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  MainRoutes.CharacterDetail
>;

interface CharacterDetailScreenProps {
  route: CharacterDetailScreenRouteProp;
  navigation: CharacterDetailScreenNavigationProp;
}

export type MainStackParamList = {
  // Auth Stack
  [MainRoutes.Login]: undefined;
  [MainRoutes.Settings]: undefined;

  // App Stack
  [MainRoutes.Home]: undefined;
  [MainRoutes.CharacterDetail]: {
    character: Character;
  };
};

type FetchCharactersConfig = AxiosRequestConfig & {
  params?: {
    [key: string]: any;
  };
};

type APIError = {
  message: string;
  code: number;
  status: string;
};

export type {
  ModeContextType,
  Theme,
  ColorsThemeTypes,
  ThemeTypes,
  HomeCharacter,
  DetailsCharacter,
  CharacterDetailScreenProps,
  FetchCharactersConfig,
  APIError,
};
