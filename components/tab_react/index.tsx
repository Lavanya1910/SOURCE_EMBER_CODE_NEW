
        React component:
        import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

interface TabProps {
  label: string;
  value: string;
}

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const TabComponent: React.FC = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('barea');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
    navigate(`/path/${newValue}`);
  };

  const handleSelectBusinessSegment = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const selectedSegment = event.target.value as string;
    console.log('Selected Business Segment:', selectedSegment);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Business Area" value="barea" {...a11yProps(0)} />
          <Tab label="Product Area" value="parea" {...a11yProps(1)} />
          <Tab label="Service Area" value="sarea" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={activeTab} index={0}>
        <InputLabel>Select Business Segment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          onChange={handleSelectBusinessSegment}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        Product Area
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        Service Area
      </TabPanel>
    </div>
  );
};

export default TabComponent;