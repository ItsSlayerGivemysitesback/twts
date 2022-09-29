import * as React from 'react';

import { makeStyles, Theme } from 'src/components/core/styles';
import Divider from 'src/components/core/Divider';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '78.75%',
  },
  categoryWrapper: {
    display: 'grid',
    gridAutoColumns: '1fr',
    gridAutoFlow: 'column',
    columnGap: theme.spacing(),
    [theme.breakpoints.down('sm')]: {
      gridAutoFlow: 'row',
      rowGap: theme.spacing(8),
    },
  },
}));

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const LinksSection = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Divider spacingBottom={38} />
      <div className={classes.categoryWrapper}>{props.children}</div>
    </div>
  );
};

export default LinksSection;
