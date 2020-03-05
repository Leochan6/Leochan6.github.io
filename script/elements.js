let elements = (() => {
  let module = {};

  
  module.error_text = document.querySelector("#error_text");

  // Home Fields
  module.name_select = document.querySelector("#name_select");
  module.rank_select = document.querySelector("#rank_select");
  module.attr_select = document.querySelector("#attr_select");
  module.level_select = document.querySelector("#level_select");
  module.magic_select = document.querySelector("#magic_select");
  module.magia_select = document.querySelector("#magia_select");
  module.episode_select = document.querySelector("#episode_select");
  
  // Home Buttons
  module.create_button = document.querySelector("#create_button");
  module.update_button = document.querySelector("#update_button");
  module.copy_button = document.querySelector("#copy_button");
  module.delete_button = document.querySelector("#delete_button");
  module.clear_button = document.querySelector("#clear_button");
  
  // Home Preview
  module.display_preview = document.querySelector("#display_preview");

  // Sorting Fields
  module.group_by_select = document.querySelector("#group_by_select");
  module.group_dir_select = document.querySelector("#group_dir_select");
  module.sort_by_1_select = document.querySelector("#sort_by_1_select");
  module.sort_dir_1_select = document.querySelector("#sort_dir_1_select");
  module.sort_by_2_select = document.querySelector("#sort_by_2_select");
  module.sort_dir_2_select = document.querySelector("#sort_dir_2_select");
  module.sort_id_dir_select = document.querySelector("#sort_id_dir_select");
  module.displays_per_row = document.querySelector("#displays_per_row");

  // Body
  module.character_list = document.querySelector("#character_list");
  module.main = document.querySelector("#main");
  module.left_bar = document.querySelector("#left_bar");
  
  return module;
});