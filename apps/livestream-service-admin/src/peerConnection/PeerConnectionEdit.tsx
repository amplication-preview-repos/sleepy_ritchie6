import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { StreamTitle } from "../stream/StreamTitle";

export const PeerConnectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="stream.id" reference="Stream" label="stream">
          <SelectInput optionText={StreamTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
