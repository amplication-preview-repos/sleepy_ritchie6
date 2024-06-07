import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { StreamTitle } from "../stream/StreamTitle";

export const PeerConnectionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
