/**
 * Elements for the Character Page.
 */
export const character_elements = {

  // Header
  theme_button: document.querySelector("#theme_button"),
  contact_button: document.querySelector("#contact_button"),
  signout_button: document.querySelector("#signout_button"),
  header_username: document.querySelector("#header_username"),
  verify_email: document.querySelector("#verify_email"),
  verify_email_close: document.querySelector("#verify_email_close"),
  verify_email_button: document.querySelector("#verify_email_button"),
  verify_email_success: document.querySelector("#verify_email_success"),
  verify_email_error: document.querySelector("#verify_email_error"),

  // Error Text
  home_error_text: document.querySelector("#home_error_text"),
  character_error_text: document.querySelector("#character_error_text"),
  profile_error_text: document.querySelector("#profile_error_text"),

  // My Character Lists
  list_create: document.querySelector("#list_create"),
  list_rename: document.querySelector("#list_rename"),
  list_duplicate: document.querySelector("#list_duplicate"),
  new_list_button: document.querySelector("#new_list_button"),
  rename_list_button: document.querySelector("#rename_list_button"),
  create_list_form: document.querySelector("#create_list_form"),
  create_list_name_field: document.querySelector("#create_list_name_field"),
  create_list_create_button: document.querySelector("#create_list_create_button"),
  duplicate_list_button: document.querySelector("#duplicate_list_button"),
  delete_list_button: document.querySelector("#delete_list_button"),
  duplicate_list_form: document.querySelector("#duplicate_list_form"),
  duplicate_list_name_field: document.querySelector("#duplicate_list_name_field"),
  duplicate_list_create_button: document.querySelector("#duplicate_list_create_button"),
  rename_list_form: document.querySelector("#rename_list_form"),
  rename_list_name_field: document.querySelector("#rename_list_name_field"),
  rename_list_create_button: document.querySelector("#rename_list_create_button"),
  saved_character_lists: document.querySelector("#saved_character_lists"),

  // Create Character Fields
  name_select: document.querySelector("#name_select"),
  rank_select: document.querySelector("#rank_select"),
  post_awaken_checkbox: document.querySelector("#post_awaken_checkbox"),
  level_select: document.querySelector("#level_select"),
  magic_select: document.querySelector("#magic_select"),
  magia_select: document.querySelector("#magia_select"),
  episode_select: document.querySelector("#episode_select"),
  doppel_checkbox: document.querySelector("#doppel_checkbox"),
  se_select: document.querySelector("#se_select"),

  // Create Character Buttons
  characterSelectModalOpen: document.querySelector("#characterSelectModalOpen"),
  create_button: document.querySelector("#create_button"),
  update_button: document.querySelector("#update_button"),
  copy_button: document.querySelector("#copy_button"),
  delete_button: document.querySelector("#delete_button"),
  min_all_button: document.querySelector("#min_all_button"),
  max_all_button: document.querySelector("#max_all_button"),

  // Character Preview
  selected_text: document.querySelector("#selected_text"),
  display_preview: document.querySelector("#display_preview"),

  // Sorting Profiles
  profile_select: document.querySelector("#profile_select"),
  new_profile_button: document.querySelector("#new_profile_button"),
  profile_create_block: document.querySelector("#profile_create_block"),
  new_profile_field: document.querySelector("#new_profile_field"),
  new_name_field: document.querySelector("#new_name_field"),
  create_profile_button: document.querySelector("#create_profile_button"),
  close_new_profile_button: document.querySelector("#close_new_profile_button"),
  delete_profile_button: document.querySelector("#delete_profile_button"),
  profile_rules: document.querySelector("#profile_rules"),

  // Display Settings
  displays_per_row: document.querySelector("#displays_per_row"),
  display_alignment_select: document.querySelector("#display_alignment_select"),
  display_padding_top_field: document.querySelector("#display_padding_top_field"),
  display_padding_left_field: document.querySelector("#display_padding_left_field"),
  display_padding_right_field: document.querySelector("#display_padding_right_field"),
  display_padding_bottom_field: document.querySelector("#display_padding_bottom_field"),

  // Background
  backgroundSelectModalOpen: document.querySelector("#backgroundSelectModalOpen"),
  background_select: document.querySelector("#background_select"),
  remove_background_button: document.querySelector("#remove_background_button"),
  background_transparency_field: document.querySelector("#background_transparency_field"),
  background_transparency_range: document.querySelector("#background_transparency_range"),

  // Settings
  player_name_field: document.querySelector("#player_name_field"),
  player_id_field: document.querySelector("#player_id_field"),
  public_list_select: document.querySelector("#public_list_select"),
  update_user_button: document.querySelector("#update_user_button"),
  remove_id_button: document.querySelector("#remove_id_button"),
  link_link_button: document.querySelector("#link_link_button"),
  image_save_button: document.querySelector("#image_save_button"),
  image_delete_button: document.querySelector("#image_delete_button"),
  image_open_button: document.querySelector("#image_open_button"),
  image_copy_button: document.querySelector("#image_copy_button"),

  // Body
  list_name_title: document.querySelector("#list_name_title"),
  header_content_divider: document.querySelector("#header_content_divider"),
  content: document.querySelector("#content"),
  main: document.querySelector("#main"),
  menu_bar: document.querySelector("#menu_bar"),
  left_main_divider: document.querySelector("#left_main_divider"),
  main_header: document.querySelector("#main_header"),

  // Export and Import
  export_image_button: document.querySelector("#export_image_button"),
  export_open_button: document.querySelector("#export_open_button"),
  export_text_button: document.querySelector("#export_text_button"),
  import_text_button: document.querySelector("#import_text_button"),

  // Filters
  zoom_field: document.querySelector("#zoom_field"),
  zoom_range: document.querySelector("#zoom_range"),

  list_filters: document.querySelector("#list_filters"),
  add_filter_button: document.querySelector("#add_filter_button"),
  apply_filter_button: document.querySelector("#apply_filter_button"),
  reset_filter_button: document.querySelector("#reset_filter_button"),
  toggle_filter_button: document.querySelector("#toggle_filter_button"),

  // Stats
  list_stats_list: document.querySelector("#list_stats_list"),
  more_stats_button: document.querySelector("#more_stats_button"),
  
  // Character List
  character_list_container: document.querySelector("#character_list_container"),
  character_list_content: document.querySelector("#character_list_content")
}  

// Message Modal
export const messageDialog = {
  modal: document.querySelector("#messageModal"),
  content: document.querySelector("#messageModalContent"),
  title: document.querySelector("#messageModalTitle"),
  text: document.querySelector("#messageModalText"),
  closeButton: document.querySelector("#messageModalClose"),
  copy: document.querySelector("#messageModalCopy"),
  list: document.querySelector("#messageModalList"),

  open: (title, text="", list="") => {
    messageDialog.modal.style.display = "block";
    messageDialog.title.innerHTML = title;
    messageDialog.text.value = text;
    messageDialog.list.innerHTML = list;
  },
  close: () => {
    messageDialog.modal.style.display = "none";
    messageDialog.title.innerHTML = "";
    messageDialog.text.value = "";
    messageDialog.text.scrollTo(0, 0);
    messageDialog.list.innerHTML = "";
  },
  isOpen: () => {
    return messageDialog.modal.style.display === "block";
  }
};

// Character Select Modal
export const characterSelectDialog = {
  modal: document.querySelector("#characterSelectModal"),
  content: document.querySelector("#characterSelectModalContent"),
  search: document.querySelector("#characterSelectModalSearch"),
  added: document.querySelector("#characterSelectModalAdded"),
  closeButton: document.querySelector("#characterSelectModalClose"),
  list: document.querySelector("#characterSelectModalList"),

  open: (loadPreviews) => {
    characterSelectDialog.modal.style.display = "block";
    characterSelectDialog.search.focus();
    loadPreviews();
  },
  close: () => {
    characterSelectDialog.modal.style.display = "none";
    characterSelectDialog.search.value = "";
    characterSelectDialog.list.innerHTML = "";
    characterSelectDialog.list.scrollTo(0, 0);
  },
  isOpen: () => {
    return characterSelectDialog.modal.style.display === "block";
  }
};

// Background Select Modal
export const backgroundSelectDialog = {
  modal: document.querySelector("#backgroundSelectModal"),
  closeButton: document.querySelector("#backgroundSelectModalClose"),
  search: document.querySelector("#backgroundSelectModalSearch"),
  list: document.querySelector("#backgroundSelectModalList"),

  open: (loadPreviews) => {
    backgroundSelectDialog.modal.style.display = "block";
    backgroundSelectDialog.search.focus();
    loadPreviews();
  },
  close: () => {
    backgroundSelectDialog.modal.style.display = "none";
    backgroundSelectDialog.search.value = "";
    backgroundSelectDialog.list.innerHTML = "";
    backgroundSelectDialog.list.scrollTo(0, 0);
  },
  isOpen: () => {
    return backgroundSelectDialog.modal.style.display === "block";
  }
};

// Import List Modal
export const importListDialog = {
  modal: document.querySelector("#importListModal"),
  content: document.querySelector("#importListModalContent"),
  title: document.querySelector("#importListModalTitle"),
  name: document.querySelector("#importListModalName"),
  closeButton: document.querySelector("#importListModalClose"),
  text: document.querySelector("#importListModalText"),
  importButton: document.querySelector("#importListModalImport"),
  list: document.querySelector("#importListModalList"),
  error: document.querySelector("#importListModalError"),

  open: () => {
    importListDialog.modal.style.display = "block";
    importListDialog.name.focus();
  },
  close: () => {
    importListDialog.modal.style.display = "none";
    importListDialog.name.value = "";
    importListDialog.text.value = "";
    importListDialog.list.innerHTML = "";
    importListDialog.error.innerHTML = "";
  },
  isOpen: () => {
    return importListDialog.modal.style.display === "block";
  }
};