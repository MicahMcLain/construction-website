"use client";
import { Grid, TextField, Select, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function ContactForm() {
  return (
    <form className="space-y-2 py-4 px-10">
      <Grid columns={{ initial: "1", sm: "2" }} gap="2">
        <TextField.Root>
          <TextField.Input placeholder="Name"></TextField.Input>
        </TextField.Root>
        <TextField.Root>
          <TextField.Input placeholder="Email"></TextField.Input>
        </TextField.Root>
        <TextField.Root>
          <TextField.Input placeholder="Phone Number"></TextField.Input>
        </TextField.Root>
        <Select.Root defaultValue="kitchen">
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Label>Projects</Select.Label>
              <Select.Item value="kitchen">Kitchen</Select.Item>
              <Select.Item value="bathroom">Bathroom</Select.Item>
              <Select.Item value="basement">Basement</Select.Item>
              <Select.Item value="interior remodel">
                Interior Remodel
              </Select.Item>
              <Select.Item value="deck">Deck</Select.Item>
              <Select.Item value="outdoor living space">
                Outdoor Living Space
              </Select.Item>
              <Select.Item value="other">Other</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Grid>

      {/* <Controller name="description" control={control} /> */}
      {/* simple mde goes inside controller */}
      <SimpleMDE placeholder="Description" />
      <Button>Submit</Button>
    </form>
  );
}
