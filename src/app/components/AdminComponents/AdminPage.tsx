const services_elements = [
  {
    nazov: "Terasy",
    slug: "terasy",
  },
  {
    nazov: "Fasády",
    slug: "fasady",
  },
  {
    nazov: "Bazény",
    slug: "bazeny",
  },
  {
    nazov: "Slnolamy",
    slug: "slnolamy",
  },
  {
    nazov: "Ploty",
    slug: "ploty",
  },
  {
    nazov: "Ostatné",
    slug: "ostatne",
  },
];

const AdminPage = () => {
  return (
    <div className="min-h-screen main_section ">
      <h2>Admin Zóna</h2>
      <p className="text-primary">
        Vitajte v adminskej zóne. Vyberte si sekciu, ktorú potrebujete upraviť.
      </p>
    </div>
  );
};

export default AdminPage;
