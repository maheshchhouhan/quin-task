export interface ILaunchParam {
  startDate: string;
  endDate: string;
}

export interface ILaunch {
  id: string;
  url: string;
  slug: string;
  name: string;
  status: {
    id: number;
    name: string;
    abbrev: string;
    description: string;
  };
  last_updated: string;
  net: string;
  window_end: string;
  window_start: string;
  probability: null;
  holdreason: null;
  failreason: null;
  hashtag: null;
  launch_service_provider: {
    id: number;
    url: string;
    name: string;
    type: string;
  };
  rocket: {
    id: number;
    configuration: {
      id: number;
      url: string;
      name: string;
      family: string;
      full_name: string;
      variant: string;
    }
  };
  mission: {
    id: number;
    name: string;
    description: string;
    launch_designator: null;
    type: string;
    orbit: {
      id: number;
      name: string;
      abbrev: string;
    }
  };
  pad: {
    id: number;
    url: string;
    agency_id: null;
    name: string;
    info_url: null;
    wiki_url: string;
    map_url: string;
    latitude: number;
    longitude: number;
    location: {
      id: string;
      url: string;
      name: string;
      country_code: string;
      map_image: string;
      total_launch_count: number;
      total_landing_count: number;
    };
    map_image: string;
    total_launch_count: number;
  };
  image: string;
}
