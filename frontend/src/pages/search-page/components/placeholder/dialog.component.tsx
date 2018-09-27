import * as React from "react";
import IconButton from "material-ui/IconButton";
import MuiDialog, { DialogTitle, DialogContent, DialogContentText, DialogProps } from "material-ui/Dialog";
import CloseIcon from "material-ui-icons/Close";
import Typography from "material-ui/Typography";
import { withTheme } from "material-ui/styles";
import { cnc } from "../../../../util";
import { LinkComponent } from './link.component';
const styles = require('./dialog.styles.scss');
const jfkFilesScenario = require('../../../../assets/img/jfk-files-scenario.png');

const Dialog: React.StatelessComponent<DialogProps> = ({ ...props }) => {
  return (
    <MuiDialog {...props} className={cnc(props.className, styles.dialog)} classes={{ paper: styles.content }}>
      <DialogTitle>
        <div className={styles.titleContainer}>
          <Typography variant="title" classes={{ title: styles.title }}>Chat with our bot to solve your problem(s).</Typography>
          <IconButton onClick={props.onClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <iframe src='https://webchat.botframework.com/embed/technolawgy?s=vQn-98RJEgw.cwA.tR8.5NM_FWNCIADFjFBM2suwzRlG1KJ8VCpVVkWMH1ZW2GM' width="100%" height="400 rem"></iframe>
          {/*<span className={styles.block}>
            In this JFK Files scenario demo, you will explore how you can use both built-in and custom Cognitive Skills inside of Azure Search to explore the documents released from the John F. Kennedy Assassination Records Collection.
            The Cognitive Search capabilities of Azure Search ingest your data from almost any datasource and enriches it using a set of cognitive skills that extracts knowledge and then lets you explore the data using Search.
          </span>
          <span className={styles.block}>
            <span>You can find more information about the project : </span>
            <LinkComponent to="//aka.ms/jfk-files-ai-lab">here</LinkComponent>
          </span>
          <span className={styles.block}>
            <span>You can find the source code : </span>
            <LinkComponent to="//aka.ms/jfk-files-code">here</LinkComponent>
          </span>
          <span className={styles.block}>Below is the architecture used for JFK files Cognitive Search demo:</span>
          <img src={jfkFilesScenario} alt="JFK scenario" className={styles.img} />*/}
        </DialogContentText>
      </DialogContent>
    </MuiDialog>
  );
}

export const DialogComponent = Dialog;
