
var SelectedColorFocused = "#c4ddff",
    SelectedColorUnfocused = "#eeeeee",
    LookupBrowse = 1,
    LookupShowColumns = 2,
    LookupMultiSelect = 4;

function checkMode(mode, option) {
    return (mode & option) == option
}