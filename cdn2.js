<script type="text/javascript">
console.log('Testing from cdn');
try
{
    var tab = $('a.SubTierNavSelected').text();

 if(tab == 'Overview') {
 
$('td[data-automation-id="Label_Status"]').text("StatusChangedFromFormScript");
}
}
catch (e)
{
console.log(e);
}

</script>