
        //React component (SfHolidays.tsx):
        import React, { useState, useEffect, useMemo } from 'react';
        import { useParams, useLocation } from '@tanstack/router';
        import { makeStyles } from '@material-ui/core/styles';
        import {
        Box,
        Button,
        Card,
        CardContent,
        CardHeader,
        Chip,
        CircularProgress,
        Container,
        Divider,
        Grid,
        Link,
        List,
        ListItem,
        ListItemText,
        Typography,
        } from '@material-ui/core';
        import {
        Add as AddIcon,
        ArrowBack as ArrowBackIcon,
        Check as CheckIcon,
        Edit as EditIcon,
        Error as ErrorIcon,
        Event as EventIcon,
        Favorite as FavoriteIcon,
        FavoriteBorder as FavoriteBorderIcon,
        Home as HomeIcon,
        Info as InfoIcon,
        List as ListIcon,
        Person as PersonIcon,
        Remove as RemoveIcon,
        Search as SearchIcon,
        } from '@material-ui/icons';
        import { Theme } from '@material-ui/core/styles';
        import { Holiday } from '../../types/holiday';
        import { HolidaysService } from '../../services/holidaysService';
        import { HolidayCard } from '../HolidayCard/HolidayCard';
        import { HolidayFormDialog } from '../HolidayFormDialog/HolidayFormDialog';
        import { HolidayListItem } from '../HolidayListItem/HolidayListItem';
        import { HolidaySearch } from '../HolidaySearch/HolidaySearch';
        import { HolidaySort } from '../HolidaySort/HolidaySort';
        import { HolidayTypeFilter } from '../HolidayTypeFilter/HolidayTypeFilter';
        import { HolidaysContext } from '../../contexts/holidaysContext';
        import { HolidaysState } from '../../contexts/holidaysState';
        import { HolidaysAction } from '../../contexts/holidaysAction';
        import { HolidaysContextProvider } from '../../contexts/holidaysContextProvider';
        import { HolidaysActionType } from '../../contexts/holidaysActionType';
        import { HolidaysContextDispatch } from '../../contexts/holidaysContextDispatch';
        import { HolidaysContextState } from '../../contexts/holidaysContextState';
        import { HolidaysContextValue } from '../../contexts/holidaysContextValue';
        import { HolidaysContextProviderProps } from '../../contexts/holidaysContextProviderProps';
        import { HolidaysContextDispatchProps } from '../../contexts/holidaysContextDispatchProps';
        import { HolidaysContextStateProps } from '../../contexts/holidaysContextStateProps';
        import { HolidaysContextValueProps } from '../../contexts/holidaysContextValueProps';
        import { HolidaysServiceProps } from '../../services/holidaysServiceProps';
        import { HolidaysServiceState } from '../../services/holidaysServiceState';
        import { HolidaysServiceDispatch } from '../../services/holidaysServiceDispatch';
        import { HolidaysServiceAction } from '../../services/holidaysServiceAction';
        import { HolidaysServiceActionType } from '../../services/holidaysServiceActionType';
        import { HolidaysServiceContext } from '../../services/holidaysServiceContext';
        import { HolidaysServiceContextProvider } from '../../services/holidaysServiceContextProvider';
        import { HolidaysServiceContextProps } from '../../services/holidaysServiceContextProps';
        import { HolidaysServiceContextState } from '../../services/holidaysServiceContextState';
        import { HolidaysServiceContextDispatch } from '../../services/holidaysServiceContextDispatch';
        import { HolidaysServiceContextValue } from '../../services/holidaysServiceContextValue';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceDispatchProps } from '../../services/holidaysServiceDispatchProps';
        import { HolidaysServiceStateProps } from '../../services/holidaysServiceStateProps';
        import { HolidaysServiceActionProps } from '../../services/holidaysServiceActionProps';
        import { HolidaysServiceActionTypeProps } from '../../services/holidaysServiceActionTypeProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps } from '../../services/holidaysServiceContextDispatchProps';
        import { HolidaysServiceContextStateProps } from '../../services/holidaysServiceContextStateProps';
        import { HolidaysServiceContextValueProps } from '../../services/holidaysServiceContextValueProps';
        import { HolidaysServiceContextProviderProps } from '../../services/holidaysServiceContextProviderProps';
        import { HolidaysServiceContextDispatchProps